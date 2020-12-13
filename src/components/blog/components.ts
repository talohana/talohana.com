import { MDXProviderComponentsProp } from '@mdx-js/react';
import { Blockquote } from './blockquote';
import { HorizontalRule } from './horizontal-rule';
import { Table } from './table';

export const components: MDXProviderComponentsProp = {
  blockquote: Blockquote,
  table: Table,
  hr: HorizontalRule,
};
