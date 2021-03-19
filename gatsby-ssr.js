require('tailwindcss/dist/tailwind.min.css');
const React = require('react');
const { RootWrapper } = require('./src/components/common/root-wrapper');

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

exports.wrapPageElement = ({ element }) => <RootWrapper>{element}</RootWrapper>;
