import { Frontmatter } from './frontmatter';

export interface Post {
  frontmatter: Frontmatter;
  code: string;
}
