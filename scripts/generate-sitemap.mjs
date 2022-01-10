import { writeFileSync } from 'fs';
import { globby } from 'globby';
import { join } from 'path';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('../../.prettierc');
  const pages = await globby(
    [
      'pages/*.tsx',
      'content/**/*.mdx',
      '!content/*.mdx',
      '!pages/_*.tsx',
      '!pages/api',
      '!pages/404.tsx',
    ],
    {
      cwd: join(process.cwd(), 'src'),
    }
  );

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(page => {
            const path = page
              .replace('pages', '')
              .replace('content', '')
              .replace('.tsx', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
                <url>
                    <loc>${`https://talohana.com${route}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
}

generate();
