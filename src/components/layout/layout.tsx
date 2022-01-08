import React from 'react';
import { Footer } from './footer';
import { NavBar } from './navbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex-1 p-4 container max-w-[700px]">{children}</main>
      <Footer />
    </>
  );
};
