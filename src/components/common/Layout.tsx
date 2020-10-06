import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ColorModeProvider } from '../../providers/ColorModeProvider';
import { theme } from '../../utils/theme';
import { SEO } from '../SEO/SEO';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <ColorModeProvider>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <SEO />
          <GlobalStyles />
          {children}
          <Footer />
        </ThemeProvider>
      </Wrapper>
    </ColorModeProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const GlobalStyles = createGlobalStyle<{ initialized: boolean }>`
    body {
      background-color: var(--color-background);
      color: var(--color-text);
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;

      &:hover {
        color: inherit;
      }
    }
`;
