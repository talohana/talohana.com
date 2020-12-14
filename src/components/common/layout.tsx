import { prism } from '@styles/prism';
import { typography } from '@styles/typography';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as TwinGlobalStyles } from 'twin.macro';
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
      <TwinGlobalStyles />
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
  ${typography}
  ${prism}
`;
