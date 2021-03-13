import { prism } from '@styles/prism';
import { typography } from '@styles/typography';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  ${typography}
  ${prism}
`;

export const GlobalStyles: React.FC = () => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
};
