import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const userSiteRepo = owner ? `${owner}.github.io`.toLowerCase() : '';
const isProjectPage = Boolean(repository && owner && repository.toLowerCase() !== userSiteRepo);

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : undefined,
  base: isProjectPage ? `/${repository}` : '/',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
