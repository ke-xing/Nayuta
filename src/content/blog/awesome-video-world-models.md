---
title: Awesome Video World Models
summary: "一个可持续维护的 Video World Models 资源清单模板，支持分类、论文链接、代码链接、项目链接、徽章和维护规范。"
category: AI Resource Collection
publishDate: 2026-03-27
updatedDate: 2026-03-27
tags:
  - Video World Models
  - Awesome List
  - AI Research
featured: true
readingTime: 10 min
accent: "#ffffff"
---

[![List Type](https://img.shields.io/badge/Awesome-Video%20World%20Models-0ea5e9?style=for-the-badge&logo=awesome-lists&logoColor=white)](#)
[![Maintained](https://img.shields.io/badge/Maintained-Yes-16a34a?style=for-the-badge&logo=githubactions&logoColor=white)](#maintenance-policy)
[![Language](https://img.shields.io/badge/Language-Markdown-334155?style=for-the-badge&logo=markdown&logoColor=white)](#md-简介)
[![Contributions](https://img.shields.io/badge/PRs-Welcome-f59e0b?style=for-the-badge&logo=git&logoColor=white)](#contribution-template)

## MD 简介

这是一个面向 `Video World Models` 方向的 Awesome List 文章模板，适合放在博客、项目主页或团队知识库中持续维护。

模板目标：

- 支持多维度分类（任务、场景、能力、评测）
- 每条资源保留论文、代码、项目主页等关键入口
- 使用徽章 logo 增强可读性与扫描效率
- 提供统一条目格式，方便后续多人协作更新

> 建议维护方式：每周固定更新时间，在每个分类下按年份倒序追加条目。

## Quick Navigation

- [分类总览](#分类总览)
- [核心模型与方法](#核心模型与方法)
- [数据集与基准](#数据集与基准)
- [工具与平台](#工具与平台)
- [Contribution Template](#contribution-template)
- [Maintenance Policy](#maintenance-policy)

## 分类总览

| 分类 | 说明 | 建议字段 |
|---|---|---|
| Foundation Models | 通用视频世界建模、生成与推理模型 | `Year`, `Paper`, `Code`, `Project`, `License` |
| Embodied & Robotics | 面向机器人/具身智能的世界模型 | `Simulator`, `Policy`, `Benchmark` |
| Simulation & Planning | 规划、控制、反事实模拟相关方法 | `Task`, `Env`, `Metrics` |
| Evaluation | 评测协议、基准任务、自动评估工具 | `Dataset`, `Eval Script`, `Leaderboard` |
| Applications | 游戏、自动驾驶、视频编辑等落地方向 | `Demo`, `Use Case`, `Deployment` |

## 核心模型与方法

### 1. Foundation Models

| Name | Year | Focus | Links | Notes |
|---|---|---|---|---|
| Your Model Name A | 2026 | Long-horizon video world simulation | [![Paper](https://img.shields.io/badge/arXiv-Paper-B31B1B?logo=arxiv&logoColor=white)](https://arxiv.org/abs/xxxx.xxxxx) [![Code](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/your-org/your-repo) [![Project](https://img.shields.io/badge/Website-Project-0284c7?logo=googlechrome&logoColor=white)](https://your-project-page.example) | 填写核心创新点与限制 |
| Your Model Name B | 2025 | Action-conditioned world modeling | [![Paper](https://img.shields.io/badge/arXiv-Paper-B31B1B?logo=arxiv&logoColor=white)](https://arxiv.org/abs/yyyy.yyyyy) [![Code](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/your-org/your-repo-b) [![Demo](https://img.shields.io/badge/Demo-Online-0f766e?logo=vercel&logoColor=white)](https://your-demo.example) | 填写训练数据规模、计算成本 |

### 2. Embodied & Robotics

| Name | Year | Task | Links | Notes |
|---|---|---|---|---|
| Your Embodied Model | 2026 | Manipulation / Navigation | [![Paper](https://img.shields.io/badge/arXiv-Paper-B31B1B?logo=arxiv&logoColor=white)](https://arxiv.org/abs/zzzz.zzzzz) [![Code](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/your-lab/embodied-world-model) [![Project](https://img.shields.io/badge/Website-Project-0284c7?logo=googlechrome&logoColor=white)](https://your-lab.example/embodied-world-model) | 标注是否支持 real-to-sim / sim-to-real |

### 3. Simulation & Planning

| Name | Year | Scenario | Links | Notes |
|---|---|---|---|---|
| Your Planning Model | 2026 | Counterfactual planning | [![Paper](https://img.shields.io/badge/arXiv-Paper-B31B1B?logo=arxiv&logoColor=white)](https://arxiv.org/abs/aaaa.aaaaa) [![Code](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/your-org/planning-world-model) [![Project](https://img.shields.io/badge/Website-Project-0284c7?logo=googlechrome&logoColor=white)](https://your-project.example/planning) | 写明是否支持闭环控制 |

## 数据集与基准

| Resource | Type | Links | Notes |
|---|---|---|---|
| Your Dataset | Dataset | [![Dataset](https://img.shields.io/badge/HuggingFace-Dataset-ffbf00?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/your-org/your-dataset) [![Paper](https://img.shields.io/badge/arXiv-Paper-B31B1B?logo=arxiv&logoColor=white)](https://arxiv.org/abs/bbbb.bbbbb) | 描述数据规模、许可协议、模态类型 |
| Your Benchmark | Benchmark | [![Code](https://img.shields.io/badge/GitHub-Benchmark-181717?logo=github&logoColor=white)](https://github.com/your-org/your-benchmark) [![Leaderboard](https://img.shields.io/badge/Leaderboard-Online-1d4ed8?logo=databricks&logoColor=white)](https://your-benchmark.example/leaderboard) | 标注指标定义、复现实验命令 |

## 工具与平台

| Tool | Purpose | Links | Notes |
|---|---|---|---|
| Your Training Stack | Training / Scaling | [![Code](https://img.shields.io/badge/GitHub-Toolkit-181717?logo=github&logoColor=white)](https://github.com/your-org/your-training-stack) [![Docs](https://img.shields.io/badge/Docs-Read-2563eb?logo=readthedocs&logoColor=white)](https://your-docs.example) | 记录依赖版本、硬件需求 |
| Your Eval Toolkit | Evaluation | [![Code](https://img.shields.io/badge/GitHub-Eval-181717?logo=github&logoColor=white)](https://github.com/your-org/world-model-eval) [![Demo](https://img.shields.io/badge/Demo-Online-0f766e?logo=streamlit&logoColor=white)](https://your-eval-demo.example) | 标注输入输出格式 |

## Contribution Template

将下面模板复制到对应分类表格中即可：

```md
| Name | Year | Focus | Links | Notes |
|---|---|---|---|---|
| Your Model Name | 2026 | One-line summary | [![Paper](https://img.shields.io/badge/arXiv-Paper-B31B1B?logo=arxiv&logoColor=white)](https://arxiv.org/abs/xxxx.xxxxx) [![Code](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/your-org/your-repo) [![Project](https://img.shields.io/badge/Website-Project-0284c7?logo=googlechrome&logoColor=white)](https://your-project-page.example) | Key notes |
```

## Maintenance Policy

- Update cadence: weekly (`Friday` suggested)
- Sort rule: by `Year` desc, then by relevance
- Link policy: at least one of `Paper`, `Code`, `Project`
- Quality bar: remove broken links, avoid duplicated entries

---

如果你希望，我也可以把这份模板再扩展成：

- 面向论文阅读群的 `paper-club` 版本
- 面向工程团队的 `production-ready` 版本
- 面向个人维护的 `lightweight` 版本
