'use strict';

const extNewTabUrl = chrome.runtime.getURL('newtab/newtab.html');
const syncingWindows = new Set();

function isNewTabUrl(url = '') {
  return url === 'chrome://newtab/' || url === extNewTabUrl || url.endsWith('/newtab/newtab.html');
}

function isActiveNewTab(tab) {
  if (!tab) return false;

  if (tab.pendingUrl) {
    return isNewTabUrl(tab.pendingUrl);
  }

  return isNewTabUrl(tab.url || '');
}

function getWindowQuery(windowId) {
  return Number.isInteger(windowId) ? { windowId } : { currentWindow: true };
}

function isMissingTabError(error) {
  const message = error?.message || String(error);
  return message.includes('No tab with id:');
}

async function safeRemoveTab(tabId) {
  try {
    await chrome.tabs.remove(tabId);
    return true;
  } catch (error) {
    if (isMissingTabError(error)) {
      return false;
    }
    throw error;
  }
}

async function syncNewTabs(windowId, preferredTabId) {
  if (!Number.isInteger(windowId) || syncingWindows.has(windowId)) {
    return;
  }

  syncingWindows.add(windowId);

  try {
    const allTabs = await chrome.tabs.query(getWindowQuery(windowId));
    const newTabs = allTabs.filter(isActiveNewTab);

    if (newTabs.length <= 1) {
      return;
    }

    const preferredTab = newTabs.find(tab => tab.id === preferredTabId);
    const tabToKeep = preferredTab || newTabs.reduce((latest, tab) => {
      if (!latest) return tab;
      return (tab.id || 0) > (latest.id || 0) ? tab : latest;
    }, null);

    for (const tab of newTabs) {
      if (tab.id === tabToKeep?.id) {
        continue;
      }
      await safeRemoveTab(tab.id);
    }
  } catch (error) {
    if (!isMissingTabError(error)) {
      console.error('Error syncing new tabs:', error);
    }
  } finally {
    syncingWindows.delete(windowId);
  }
}

chrome.tabs.onCreated.addListener((tab) => {
  if (!isActiveNewTab(tab)) {
    return;
  }

  syncNewTabs(tab.windowId, tab.id);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading' && !changeInfo.url) {
    return;
  }

  if (!isActiveNewTab(tab)) {
    return;
  }

  syncNewTabs(tab.windowId, tabId);
});
