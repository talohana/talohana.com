import { MDXProviderComponentsProp } from '@mdx-js/react';
import { Blockquote } from './blockquote';
import { Table } from './table';

export const components: MDXProviderComponentsProp = {
  blockquote: Blockquote,
  table: Table,
};
