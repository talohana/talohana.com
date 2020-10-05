import React, { useLayoutEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import { SEO } from '../SEO/SEO';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  useLayoutEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <SEO />
        <GlobalStyles />
        {children}
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const GlobalStyles = createGlobalStyle`
    body {
      &.dark-mode
      &.light-mode {
        transition: all 0.5s linear;
      }

      &.dark-mode {
        background-color: #1f1f1f;
        color: #dfe6e9;
      }

      &.light-mode {
        background-color: #ecf0f1;
        color: #1f1f1f;
      }
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
