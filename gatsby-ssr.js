const React = require('react');
const { ColorModeProvider } = require('./src/providers/color-mode-provider');
const { MDXProvider } = require('@mdx-js/react');
const { components } = require('./src/components/blog/components');

const ColorModeScriptTag = () => {
  const codeToRunOnClient = `
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ColorModeScriptTag key="color-mode-script" />);
};

exports.wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </MDXProvider>
  );
};
