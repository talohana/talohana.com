import { Footer, NavBar } from '@components/layout';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex-1 py-4 mx-auto">{children}</main>
      <Footer />
    </>
  );
};
