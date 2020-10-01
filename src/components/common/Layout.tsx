import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../utils/theme';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <ThemeProvider theme={darkTheme}>
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
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        transition: all 0.5s linear;
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
