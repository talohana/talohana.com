import { MDXProvider } from '@mdx-js/react';
import { ColorModeProvider } from '@providers/color-mode-provider';
import React from 'react';
import { components } from '../blog/components';
import { GlobalStyles } from './global-styles';

export const RootWrapper: React.FC = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <GlobalStyles />
      <ColorModeProvider>{children}</ColorModeProvider>
    </MDXProvider>
  );
};
