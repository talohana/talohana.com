import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { prism } from '../../styles/prism';
import { reset } from '../../styles/reset';
import { SEO } from '../SEO/SEO';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  customSEO?: boolean;
}

export const Layout: React.FC<Props> = ({ children, customSEO }) => {
  return (
    <>
      {!customSEO && <SEO />}
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

Layout.defaultProps = {
  customSEO: false,
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${prism}
  
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${media.lessThan('medium')`
      font-size: 16px !important;
    `}
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    padding-top: 3rem;
  }

  ::selection {
    background-color: ${({ theme }) => theme.primary};
  }
  
  a {
    color: ${props => props.theme.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

 ${media.lessThan('small')`
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
 `}
`;
