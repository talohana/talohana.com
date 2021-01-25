import { prism } from '@styles/prism';
import { typography } from '@styles/typography';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as TwinGlobalStyles } from 'twin.macro';

const CustomGlobalStyles = createGlobalStyle`
  ${typography}
  ${prism}
`;

export const GlobalStyles: React.FC = () => {
  return (
    <>
      <TwinGlobalStyles />
      <CustomGlobalStyles />
    </>
  );
};
