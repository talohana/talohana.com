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

const Wrapper = tw.div`min-h-screen flex flex-col`;

const GlobalStyles = createGlobalStyle`
  ${typography}
  ${prism}
`;

export const Layout: React.FC<Props> = ({ children, customSEO = false }) => {
  return (
    <>
      {!customSEO && <SEO />}
      <GlobalStyles />
      <TwinGlobalStyles />
      <Wrapper>
        <Header />
        <main tw="flex-1">{children}</main>
        <Footer />
      </Wrapper>
    </>
  );
};
