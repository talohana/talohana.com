import { ReadTimeResults } from 'reading-time';

export interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  tags: string[];
  readTime: ReadTimeResults;
}
