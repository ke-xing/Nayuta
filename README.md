# Nayuta

Nayuta is a personal technical blog built with Astro.

Current information architecture:

- Home: personal intro + flat article feed + year/category filters
- Journal: category modules
- Category page: flat list of all posts in that category
- Article page: metadata + table of contents + content

GitHub Pages deployment is already configured.

## 1. Local Development

Install dependencies and start dev server:

```bash
npm install
npm run dev
```

Default URL:

```text
http://localhost:4321
```

Build and type-check:

```bash
npm run build
npm run check
```

## 2. Project Structure

```text
.
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  └─ PostCard.astro
│  ├─ content/
│  │  └─ blog/
│  │     ├─ hello-nayuta.md
│  │     ├─ building-a-blog-on-github-pages.md
│  │     └─ writing-roadmap-2026.md
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ 404.astro
│  │  └─ blog/
│  │     ├─ index.astro
│  │     ├─ [slug].astro
│  │     └─ category/
│  │        └─ [category].astro
│  ├─ styles/
│  │  └─ global.css
│  ├─ utils/
│  │  ├─ category.ts
│  │  ├─ date.ts
│  │  └─ paths.ts
│  ├─ content.config.ts
│  └─ site.config.ts
├─ .github/workflows/deploy.yml
├─ astro.config.mjs
└─ package.json
```

## 3. Where to Edit Text and Layout

### 3.1 Global Site Metadata

File: `src/site.config.ts`

Edit:

- site title, subtitle, description
- author and GitHub link
- home intro profile (`profile`)
- journal category descriptions (`categoryDescriptions`)

### 3.2 Home Top Intro

File: `src/pages/index.astro`

Data source:

- `siteMeta.profile.name`
- `siteMeta.profile.role`
- `siteMeta.profile.intro`
- `siteMeta.profile.summary`
- `siteMeta.profile.location`
- `siteMeta.profile.links`

### 3.3 Home Filters (Year + Category)

File: `src/pages/index.astro`

Behavior:

- Year options are derived from `publishDate`
- Category options are derived from article `category`
- Filter state syncs to URL query params: `year`, `category`

### 3.4 Journal Category Modules

File: `src/pages/blog/index.astro`

Behavior:

- Posts are grouped by `category`
- Each module shows: name, post count, latest date, preview list
- Each module links to `/blog/category/[category]`

### 3.5 Category Flat Feed

File: `src/pages/blog/category/[category].astro`

Behavior:

- Displays all posts in the selected category as a flat feed

### 3.6 Article Detail Page

File: `src/pages/blog/[slug].astro`

Behavior:

- Shows category entry, date, reading time, tags
- Auto-generates table of contents from markdown headings

### 3.7 Visual Style and Personality

File: `src/styles/global.css`

Recommended order when editing:

1. Update design tokens in `:root`
2. Update key modules (`intro-panel`, `filter-bar`, `post-card`, `category-module`)
3. Tune breakpoints in media queries

## 4. Writing Articles

Articles live in: `src/content/blog/`

Each article is a `.md` file with frontmatter.

### 4.1 Frontmatter Fields

Required:

- `title`: article title
- `summary`: short summary
- `category`: category name (used for filters and journal grouping)
- `publishDate`: `YYYY-MM-DD`

Common optional:

- `updatedDate`
- `tags` (array)
- `featured` (boolean)
- `readingTime` (e.g. `6 min`)
- `accent` (currently optional metadata field)

### 4.2 Frontmatter Template

```md
---
title: Designing Execution Systems for Solo Builders
summary: A practical framework for turning ideas into shipped outcomes.
category: Engineering Systems
publishDate: 2026-04-02
updatedDate: 2026-04-05
tags:
  - Execution
  - Systems Design
featured: false
readingTime: 7 min
accent: "#ffffff"
---
```

## 5. Markdown Guide (Common Elements)

### 5.1 Headings and paragraphs

```md
# H1 Title
## H2 Section
### H3 Subsection
```

### 5.2 Emphasis and inline code

```md
Use **bold**, *italic*, and `inline code`.
```

### 5.3 Lists and task lists

```md
- item 1
- item 2

1. step 1
2. step 2

- [x] done
- [ ] todo
```

### 5.4 Quotes

```md
> This is a quote block.
```

### 5.5 Code blocks with syntax highlighting

````md
```ts
export function add(a: number, b: number) {
  return a + b;
}
```
````

### 5.6 Tables

```md
| Field      | Type   | Notes         |
| ---------- | ------ | ------------- |
| `title`    | string | required      |
| `category` | string | required      |
| `readTime` | string | optional text |
```

### 5.7 Images

Place images in `public/`, then reference them:

```md
![Architecture Diagram](/images/architecture-v2.png)
```

### 5.8 Links and anchor links

```md
[Visit Astro](https://astro.build)
[Jump to Section](#execution-model)
```

### 5.9 Horizontal rule

```md
---
```

### 5.10 Collapsible content with HTML

```md
<details>
  <summary>Click to expand</summary>
  Hidden detail content.
</details>
```

## 6. Add a New Category

No code change is required.

Just use a new `category` value in article frontmatter:

```md
category: AI Workflows
```

The site will automatically:

1. Show the category in home filters
2. Create a new category module in Journal
3. Generate `/blog/category/ai-workflows/`

If you want a custom description for that category module, add it in `src/site.config.ts` under `categoryDescriptions`.

## 7. GitHub Pages Deployment

Workflow file: `.github/workflows/deploy.yml`

Deployment flow:

1. Push to `main`
2. GitHub Actions builds and deploys automatically
3. In repository settings, ensure `Settings -> Pages -> Source` is `GitHub Actions`

## 8. Quick Edit Map

- Home intro content: `src/site.config.ts` + `src/pages/index.astro`
- Home filter logic: `src/pages/index.astro` (`<script is:inline>`)
- Post card layout: `src/components/PostCard.astro`
- Journal category modules: `src/pages/blog/index.astro`
- Category page list: `src/pages/blog/category/[category].astro`
- Article page structure: `src/pages/blog/[slug].astro`
- Global visual system: `src/styles/global.css`
