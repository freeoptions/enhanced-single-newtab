# Enhanced Single NewTab 🚀

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/enhanced-single-newtab)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Chrome](https://img.shields.io/badge/chrome->=88-brightgreen.svg)](https://www.google.com/chrome/)

> 一个更优质的浏览器插件，限制只能打开一个新标签页，并提供丰富的自定义功能和统计信息。

## ✨ 核心功能

### 🔒 单标签页限制
- **智能检测**：自动检测是否已有新标签页存在
- **自动切换**：当尝试打开新标签页时，自动关闭新建的并切换到已存在的标签页
- **无缝体验**：避免浏览器中出现多个空白标签页，提高工作效率

### 📊 统计功能
- **总计阻止**：记录累计阻止了多少次重复标签页
- **今日统计**：显示今天阻止的次数
- **数据持久化**：统计数据自动保存，重启浏览器后依然保留
- **一键重置**：可以随时重置统计数据

### ⚙️ 自定义设置
- **切换时重新加载**：选择切换到已存在标签页时是否重新加载页面
- **显示通知**：阻止重复标签页时显示桌面通知
- **启用统计**：可选择是否启用统计功能

### 🎯 智能搜索
- **自动聚焦**：每次切换到新标签页时，自动聚焦到搜索框
- **光标定位**：如果搜索框有内容，光标自动定位到文字末尾（不会全选）
- **智能识别**：自动识别输入的是网址还是搜索内容
- **一键清除**：快速清除搜索框内容

### 🔗 快捷方式管理
- **自定义快捷方式**：添加常用网站的快捷方式
- **美观展示**：以网格形式展示快捷方式
- **便捷访问**：一键打开常用网站

## 📦 安装步骤

### 1. 生成图标（首次安装必须）

1. 用浏览器打开 `generate-icons.html` 文件
2. 点击 **"✨ 生成图标"** 按钮预览图标
3. 点击 **"💾 下载所有图标"** 按钮下载图标文件
4. 将下载的 4 个图标文件（`icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png`）移动到 `icons` 文件夹中

### 2. 安装插件

#### Chrome 浏览器
1. 打开 Chrome 浏览器
2. 在地址栏输入：`chrome://extensions/`
3. 打开右上角的 **"开发者模式"** 开关
4. 点击 **"加载已解压的扩展程序"** 按钮
5. 选择 `enhanced-single-newtab` 文件夹
6. 安装完成！✅

#### Edge 浏览器
1. 打开 Edge 浏览器
2. 在地址栏输入：`edge://extensions/`
3. 打开左下角的 **"开发人员模式"** 开关
4. 点击 **"加载解压缩"** 按钮
5. 选择 `enhanced-single-newtab` 文件夹
6. 安装完成！✅

### 3. 开始使用

1. 按 `Ctrl+T`（Windows）或 `Cmd+T`（Mac）打开新标签页
2. 尝试再次按 `Ctrl+T`，你会发现自动切换到了第一个新标签页
3. 点击工具栏的插件图标查看统计信息和设置

## 🎨 特色功能详解

### 自动聚焦搜索框

每次切换到新标签页时：
1. 搜索框自动获得焦点
2. 如果搜索框中有文字，光标会自动定位到文字末尾
3. 不会全选文字，方便继续输入

### 智能搜索

支持两种输入方式：
- **网址**：输入 `google.com` 或 `https://github.com` 直接跳转
- **搜索**：输入其他内容会使用 Google 搜索

### 统计面板

点击插件图标可以查看：
- 📈 总计阻止次数
- 📅 今日阻止次数
- 🔄 重置统计按钮

## 📁 文件结构

```
enhanced-single-newtab/
├── manifest.json           # 插件配置文件
├── background.js           # 后台脚本（核心功能）
├── generate-icons.html     # 图标生成工具
│
├── popup/                  # 弹出窗口
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
│
├── newtab/                 # 自定义新标签页
│   ├── newtab.html
│   ├── newtab.css
│   └── newtab.js
│
├── icons/                  # 图标文件夹
│   ├── icon-16.png
│   ├── icon-32.png
│   ├── icon-48.png
│   └── icon-128.png
│
└── _locales/               # 国际化文件
    ├── en/
    │   └── messages.json
    └── zh_CN/
        └── messages.json
```

## ⚙️ 配置选项

| 选项 | 说明 | 默认值 |
|------|------|--------|
| 切换时重新加载 | 切换到已存在标签页时是否重新加载页面 | ❌ 否 |
| 显示通知 | 阻止重复标签页时显示桌面通知 | ❌ 否 |
| 启用统计 | 记录阻止次数统计信息 | ✅ 是 |

## 🔧 技术栈

- **Manifest Version**: V3
- **Permissions**: tabs, storage, notifications
- **Minimum Chrome Version**: 88
- **技术**: HTML5, CSS3, JavaScript ES6+

## 🎯 与原项目的对比

相比 [only-one-newtab](https://github.com/LightAPIs/only-one-newtab)，本插件的改进：

| 特性 | only-one-newtab | Enhanced Single NewTab |
|------|-----------------|------------------------|
| 核心功能 | ✅ | ✅ |
| 统计功能 | ❌ | ✅ |
| 弹出窗口 | ❌ | ✅ |
| 自定义新标签页 | ❌ | ✅ |
| 自动聚焦搜索框 | ❌ | ✅ |
| 智能搜索 | ❌ | ✅ |
| 快捷方式管理 | ❌ | ✅ |
| 美观的 UI | ❌ | ✅ |

## 🐛 故障排除

### 插件无法加载
- ✅ 确保所有文件都在正确的位置
- ✅ 检查 icons 文件夹中是否有 4 个图标文件
- ✅ 在扩展程序页面点击"重新加载"按钮

### 统计数据不更新
- ✅ 确保"启用统计"选项已开启
- ✅ 尝试重新加载插件

### 搜索框无法自动聚焦
- ✅ 检查浏览器是否阻止了焦点获取
- ✅ 尝试手动点击搜索框

## 📝 更新日志

### v1.0.0 (2024-04-07)
- 🎉 初始版本发布
- ✨ 实现单标签页限制功能
- 📊 添加统计功能
- 🎯 实现自动聚焦搜索框
- 🔗 添加快捷方式管理
- 🎨 设计美观的用户界面

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

## 🙏 致谢

灵感来源于 [only-one-newtab](https://github.com/LightAPIs/only-one-newtab) 项目。

---

**享受更高效的浏览体验！** 🚀
