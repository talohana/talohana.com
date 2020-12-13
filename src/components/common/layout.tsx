import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import tw from 'twin.macro';
import { prism } from '../../styles/prism';
import { SEO } from '../SEO/seo';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  customSEO?: boolean;
};

export const Layout: React.FC<Props> = ({ children, customSEO }) => {
  return (
    <>
      {!customSEO && <SEO />}
      <GlobalStyles />
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

Layout.defaultProps = {
  customSEO: false,
};

const Wrapper = tw.div`min-h-screen flex flex-col justify-between`;

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${prism}
  
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${tw`text-lg leading-normal`}
  }

  body {
    ${tw`text-black bg-white dark:text-white dark:bg-black`}
  }

  ::selection {
    ${tw`text-white bg-primary-400`}
  }
  
  a {
    ${tw`text-primary font-bold no-underline hover:underline`}
  }

  @media screen and (max-width: 800px) {
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
  }
`;
