import React from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};
