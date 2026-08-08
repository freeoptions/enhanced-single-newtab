# enhanced-single-newtab 项目专属规则

通用规则见：`E:\@imFile-Download\AI-Useful-Prompt\通用开发工作规则.md`。

- 本项目是 Chrome Manifest V3 浏览器扩展，入口和权限以根目录 `manifest.json` 为准。
- 主要代码包括 `background.js`、`newtab` 和 `icons`；核心目标是增强新标签页并限制重复新标签页。
- 没有必要引入构建工具；修改后优先通过 Chrome 的“加载已解压的扩展程序”进行验证。
- 涉及扩展权限、Cookie、历史记录或网页注入时，尽量保持最小权限，不擅自扩大 `manifest.json` 的权限范围。
- 不要提交浏览器个人数据、登录信息或本地调试导出文件。
