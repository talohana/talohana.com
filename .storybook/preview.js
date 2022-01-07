import { ThemeProvider } from 'next-themes';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider attribute="class">
      <Story />
    </ThemeProvider>
  ),
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});
