import { Frontmatter } from '@/types/frontmatter';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface Post {
  frontmatter: Frontmatter;
  code: string;
}

export async function getFiles(): Promise<string[]> {
  return readdirSync(join(process.cwd(), 'src', 'content', 'blog'));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const file = join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);

  const { code, frontmatter } = await bundleMDX<Frontmatter>({
    file,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: 'anchor',
            },
          },
        ],
      ];

      return options;
    },
  });

  return {
    code,
    frontmatter: {
      ...frontmatter,
      readTime: readingTime(code),
    },
  };
}

export async function getPostsFrontmatter(): Promise<Frontmatter[]> {
  const files = await getFiles();

  return files.reduce((posts: Frontmatter[], file) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'content', 'blog', file),
      'utf-8'
    );

    const { data } = matter(source);

    posts.push({
      ...(data as Omit<Frontmatter, 'slug' | 'readTime'>),
      slug: file.replace(/\.mdx$/, ''),
      readTime: readingTime(source),
    });

    return posts;
  }, []);
}
