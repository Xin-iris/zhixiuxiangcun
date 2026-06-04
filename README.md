# 智绣乡村 · 阿热灵绣静态站

本仓库用于 GitHub Pages（Deploy from branch：`main / root`）部署。站点根入口固定为 `index.html`，因此访问 `https://xin-iris.github.io/zhixiuxiangcun/` 时会直接打开首页。

## 冲突处理说明

之前 GitHub 仍显示冲突，主要原因有两个：

1. 功能分支和 `main` 分支同时修改了同一批中文命名 HTML 文件，GitHub 需要人工判断保留哪一边。
2. 早期页面里有较多压缩成单行的 HTML/CSS/JS，冲突编辑器会把大段代码放在同一个冲突块里，看起来像括号或标签错乱。

本次已改为“英文文件名作为正式页面、中文文件仅做兼容跳转”的结构，减少中文文件名和重复改动带来的合并冲突。仓库内已检查没有任何 Git 冲突分隔符，HTML 页面也已重新格式化为稳定的多行结构，便于继续合并和维护。

## 页面入口

正式页面全部使用英文文件名：

- 首页：`index.html`
- 项目介绍：`about.html`
- 纹样数据库：`patterns.html`
- 智绣实验室 / 定制引擎：`custom.html`
- 文创商城：`shop.html`

为了避免旧链接失效，以下中文文件仍然保留，但只作为跳转页：

- `首页.html` → `index.html`
- `项目介绍.html` → `about.html`
- `纹样数据库.html` → `patterns.html`
- `私人定制页面.html` → `custom.html`
- `购买页面.html` → `shop.html`

## 资产目录

图片已经按用途整理到 `assets/images/` 下，页面中的路径均使用相对路径，适配 GitHub Pages 的仓库子路径部署方式。

- `assets/images/backgrounds/`：页面背景、活动与服务背景图
- `assets/images/heritage/`：非遗传承、教材、实验室入口图
- `assets/images/patterns/`：原有纹样图片
- `assets/images/patterns/generated/`：新增生成式纹样 SVG
- `assets/images/products/`：原有文创商品图
- `assets/images/products/generated/`：新增生成式商品 SVG
- `assets/images/brand/`：清晰版品牌 logo
