# Save to Obsidian Chrome 扩展

<p align="center">
  <img src="icons/icon48.png" alt="Save to Obsidian Logo">
</p>

## 📝 项目简介
Save to Obsidian 是一个 Chrome 扩展程序，让你能够轻松地将网页中的内容（包括文本和图片）一键保存到 Obsidian 笔记软件中。

通过简洁的卡片式界面，你可以在保存内容的同时添加个人想法，让知识收集和整理变得更加高效。

## ✨ 功能特点
- 🔍 支持选中文本和图片内容
- 🎯 便捷的右键菜单操作
- 💭 支持添加个人想法/笔记
- 📂 可选择保存目标文件夹
- 🔄 与 Obsidian 完美集成
- ⚙️ 支持自定义 Vault 和文件夹配置

## 🛠️ 安装步骤
1. 克隆仓库到本地
```bash
git clone git@github.com:flanliulf/Save-to-Obsidian.git
```
2. 打开 Chrome 浏览器，进入扩展程序页面 (chrome://extensions/)
3. 开启开发者模式
4. 点击"加载已解压的扩展程序"，选择项目文件夹

## 📖 使用方法
1. 在 Obsidian 中安装并启用 "Advanced obsidian URI" 插件
2. 在扩展选项中配置 Vault 名称和目标文件夹
3. 在网页中选中需要保存的内容
4. 右键点击，选择"保存到 Obsidian"
5. 在弹出的卡片中添加想法（可选）
6. 选择目标文件夹并点击保存

## ⚙️ 配置说明
在扩展选项页面中可以进行以下配置：
- 启用/禁用 Obsidian 集成
- 设置 Obsidian Vault 名称
- 设置默认保存文件夹

## 📋 依赖要求
- Chrome 浏览器
- Obsidian 笔记软件
- Obsidian Advanced URI 插件

## 🔧 技术架构
该扩展程序由以下主要组件构成：

### 1. 清单文件 (manifest.json)
- 定义扩展的基本信息
- 配置权限和组件

### 2. 后台脚本 (background.js)
- 处理右键菜单
- 管理消息传递

### 3. 内容脚本 (content.js)
- 获取选中内容
- 显示保存卡片
- 处理用户交互

### 4. 选项页面 (options.html & options.js)
- 提供用户配置界面
- 管理扩展设置

### 5. 样式文件 (popup.css)
- 定义卡片界面样式
- 响应式布局设计

## ⚠️ 注意事项
- 使用前需要确保已正确安装并配置 Obsidian Advanced URI 插件
- 确保填写正确的 Vault 名称和文件夹路径
- 选中内容包含图片时，会自动处理图片 URL

## 🤝 贡献指南
欢迎提交 Pull Request 或提出 Issue。在提交代码前，请确保：
1. 代码符合项目规范
2. 已经测试过相关功能
3. 更新相关文档

## 📄 许可证
MIT License

## 🙏 致谢
- [Obsidian](https://obsidian.md/)
- [Advanced Obsidian URI](https://github.com/Vinzent03/obsidian-advanced-uri)

## 📞 联系方式
如有问题或建议，欢迎：
- 提交 Issue
- 发送邮件至：flanliulf@gmail.com

---

<p align="center">Made with ❤️ for Obsidian users</p>