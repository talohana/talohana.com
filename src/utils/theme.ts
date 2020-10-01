import { DefaultTheme } from 'styled-components';

const commonTheme: Pick<DefaultTheme, 'primary' | 'white'> = {
  primary: '#0984e3',
  white: '#ecf0f1',
};

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  body: '#1f1f1f',
  text: '#dfe6e9',
};

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  body: '#ecf0f1',
  text: '#1f1f1f',
};
