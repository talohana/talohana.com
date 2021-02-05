import { ColorMode } from '@models';
import React from 'react';

export type ColorModeContextValue = {
  colorMode: ColorMode;
  setColorMode(mode: ColorMode): void;
};

const defaultContext: ColorModeContextValue = {
  colorMode: 'light',
  // eslint-disable-next-line @modelscript-eslint/no-empty-function
  setColorMode: () => {},
};

export const ColorModeContext = React.createContext(defaultContext);

export const ColorModeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>('light');

  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue: ColorMode = root.classList.contains('dark')
      ? 'dark'
      : 'light';

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (mode: ColorMode): void => {
    const root = window.document.documentElement;

    rawSetColorMode(mode);

    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    window.localStorage.setItem('theme', mode);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
