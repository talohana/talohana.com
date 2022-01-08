import { Footer, NavBar } from '@components/layout';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex-1 p-4 container max-w-[700px]">{children}</main>
      <Footer />
    </>
  );
};
