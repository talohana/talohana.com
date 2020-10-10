/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');
const { Layout } = require('./src/components/common/Layout');
const { ColorModeProvider } = require('./src/providers/ColorModeProvider');
const { ThemeProvider } = require('styled-components');
const { theme } = require('./src/utils/theme');

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ThemeProvider>
  );
};
