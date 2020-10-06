import React from 'react';
import { ColorMode } from '../models/ColorMode';
import { COLORS } from '../utils/colors';

function getInitialColorMode(): ColorMode {
  const root = window.document.documentElement;

  const initialColorValue = root.style.getPropertyValue('--initial-color-mode');

  return initialColorValue as ColorMode;
}

type ColorModeContext = {
  colorMode: ColorMode;
  setColorMode(mode: ColorMode): void;
};

const defaultContext: ColorModeContext = {
  colorMode: 'light',
  setColorMode: () => {},
};

export const ColorModeContext = React.createContext(defaultContext);

export const ColorModeProvider: React.FC = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>(
    getInitialColorMode()
  );

  const setColorMode = (mode: ColorMode): void => {
    const root = window.document.documentElement;

    rawSetColorMode(mode);

    root.style.setProperty(
      '--color-text',
      mode === 'light' ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      '--color-background',
      mode === 'light' ? COLORS.light.background : COLORS.dark.background
    );

    window.localStorage.setItem('color-mode', mode);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
