/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');
const { ColorModeProvider } = require('./src/providers/ColorModeProvider');
const { ThemeProvider } = require('styled-components');
const { theme } = require('./src/styles/theme');
const { MDXProvider } = require('@mdx-js/react');
const { components } = require('./src/components/blog/components');

exports.wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>{element}</ColorModeProvider>
      </ThemeProvider>
    </MDXProvider>
  );
};
