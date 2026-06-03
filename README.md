# 智绣乡村 · 阿热灵绣静态站

本仓库用于 GitHub Pages（Deploy from branch：`main / root`）部署。站点根入口固定为 `index.html`，因此访问 `https://xin-iris.github.io/zhixiuxiangcun/` 时会直接打开首页。

## 冲突处理说明

本次冲突来自旧首页修复版本与新增页面/资产版本同时修改了以下页面：

- `index.html`
- `首页.html`
- `项目介绍.html`
- `私人定制页面.html`
- `购买页面.html`

已保留增强版页面内容，并继续沿用整理后的 `assets/images/` 图片目录结构；新增的 `纹样数据库.html`、高清 logo、生成纹样和文创商品素材也一并保留。后续如果 GitHub 提示冲突，请以当前分支中的增强版页面为准，不要回退到最初散放图片的版本。

## 页面入口

- 首页：`index.html`
- 原中文首页副本：`首页.html`
- 项目介绍：`项目介绍.html`
- 纹样数据库：`纹样数据库.html`
- 智绣实验室 / 定制引擎：`私人定制页面.html`
- 文创商城：`购买页面.html`

## 资产目录

图片已经按用途整理到 `assets/images/` 下，页面中的路径均使用相对路径，适配 GitHub Pages 的仓库子路径部署方式。

- `assets/images/backgrounds/`：页面背景、活动与服务背景图
- `assets/images/heritage/`：非遗传承、教材、实验室入口图
- `assets/images/patterns/`：原有纹样图片
- `assets/images/patterns/generated/`：新增生成式纹样 SVG
- `assets/images/products/`：原有文创商品图
- `assets/images/products/generated/`：新增生成式商品 SVG
- `assets/images/brand/`：清晰版品牌 logo
