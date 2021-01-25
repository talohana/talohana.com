import React from 'react';
import tw from 'twin.macro';
import { SEO } from '../SEO/seo';
import { Footer } from './footer';
import { GlobalStyles } from './global-styles';
import { Header } from './header';

type Props = {
  customSEO?: boolean;
};

const Wrapper = tw.div`min-h-screen flex flex-col`;

export const Layout: React.FC<Props> = ({ children, customSEO = false }) => {
  return (
    <Wrapper>
      {!customSEO && <SEO />}
      <GlobalStyles />
      <Header />
      <main tw="flex-1">{children}</main>
      <Footer />
    </Wrapper>
  );
};
