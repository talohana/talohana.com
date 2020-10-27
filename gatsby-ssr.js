/* eslint-disable @typescript-eslint/no-var-requires */

const React = require('react');
const { ColorModeProvider } = require('./src/providers/ColorModeProvider');
const { ThemeProvider } = require('styled-components');
const { theme } = require('./src/styles/theme');
const { COLORS } = require('./src/styles/colors');
const { MDXProvider } = require('@mdx-js/react');
const { components } = require('./src/components/blog/components');

const ColorModeScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
    
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
    
      // If they haven't been explicit, let's check the media query
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
    
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light';
    }
    
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light' ? '${COLORS.light.text}' : '${COLORS.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light' ? '${COLORS.light.background}' : '${COLORS.dark.background}'
    );

    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ColorModeScriptTag key="color-mode-script" />);
};

exports.wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>{element}</ColorModeProvider>
      </ThemeProvider>
    </MDXProvider>
  );
};
