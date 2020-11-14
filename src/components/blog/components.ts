import { MDXProviderComponentsProp } from '@mdx-js/react';
import { SocialLinks } from '../common/social-links';
import { Blockquote } from './blockquote';
import { Table } from './table';

export const components: MDXProviderComponentsProp = {
  blockquote: Blockquote,
  table: Table,
  SocialLinks,
};
