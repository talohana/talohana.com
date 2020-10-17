/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');
const { ColorModeProvider } = require('./src/providers/ColorModeProvider');
const { ThemeProvider } = require('styled-components');
const { theme } = require('./src/styles/theme');

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ThemeProvider>
  );
};
