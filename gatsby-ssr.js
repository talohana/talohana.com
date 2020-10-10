/* eslint-disable @typescript-eslint/no-var-requires */

const React = require('react');
const { Layout } = require('./src/components/common/Layout');
const { ColorModeProvider } = require('./src/providers/ColorModeProvider');
const { ThemeProvider } = require('styled-components');
const { theme } = require('./src/utils/theme');

const COLORS = {
  light: {
    background: '#ecf0f1',
    text: '#1f1f1f',
  },
  dark: {
    background: '#1f1f1f',
    text: '#dfe6e9',
  },
};

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
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ThemeProvider>
  );
};
