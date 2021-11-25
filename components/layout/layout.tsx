import { Footer } from "@/components/layout/navigation/footer/footer";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
