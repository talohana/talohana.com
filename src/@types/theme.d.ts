import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    body: string;
    text: string;
    primary: string;
    white: string;
  }
}
