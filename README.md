# Nayuta

一个基于 Astro 的个人技术博客项目，已经配置好 GitHub Pages 自动部署工作流。

## 特性

- 静态站点，适合直接托管在 GitHub Pages
- 首页、博客列表页、文章详情页已经搭好
- 使用 Markdown 管理文章内容
- 自动根据 GitHub 仓库名称处理 Pages 部署路径
- 自带一套偏技术写作气质的视觉风格

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://localhost:4321
```

## 构建

```bash
npm run build
npm run preview
```

## 文章管理

文章放在 `src/content/blog/` 目录下，使用 Markdown 编写，Frontmatter 字段示例：

```md
---
title: 文章标题
summary: 一句话摘要
publishDate: 2026-03-20
updatedDate: 2026-03-22
tags:
  - 前端工程化
  - 架构
featured: false
readingTime: 6 min
accent: "#0f766e"
---
```

## GitHub Pages 部署

1. 把仓库推送到 GitHub。
2. 打开仓库的 `Settings -> Pages`。
3. 在 `Build and deployment` 里选择 `GitHub Actions`。
4. 之后每次推送到 `main` 分支都会自动部署。

## 建议你接下来修改的地方

- 更新 `src/site.config.ts` 里的站点标题、描述和 GitHub 链接
- 把示例文章替换成你自己的内容
- 如果你使用自定义域名，可以在仓库根目录额外加入 `CNAME`
