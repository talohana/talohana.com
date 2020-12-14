import { MDXProviderComponentsProp } from '@mdx-js/react';
import tw from 'twin.macro';
import { Blockquote } from './blockquote';
import { HorizontalRule } from './horizontal-rule';
import { Table } from './table';

export const components: MDXProviderComponentsProp = {
  blockquote: Blockquote,
  table: Table,
  hr: HorizontalRule,
  ul: tw.ul`list-disc ml-4 mb-4`,
  li: tw.li`mb-2`,
};
