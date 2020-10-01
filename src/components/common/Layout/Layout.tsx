import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../../utils/theme';
import { Footer } from '../Footer/Footer';
import { GlobalStyles, Wrapper } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        {children}
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};
