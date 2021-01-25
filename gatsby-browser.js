const React = require('react');
const { ColorModeProvider } = require('./src/providers/color-mode-provider');
const { MDXProvider } = require('@mdx-js/react');
const { components } = require('./src/components/blog/components');

exports.wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </MDXProvider>
  );
};
