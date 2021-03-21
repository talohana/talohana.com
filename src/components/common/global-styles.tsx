import { prism } from '@styles/prism';
import { typography } from '@styles/typography';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

export const CustomStyles = createGlobalStyle`
  ${prism}
  ${typography}
`;

export const GlobalStyles: React.FC = () => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
};
