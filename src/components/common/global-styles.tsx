import { prism } from '@styles/prism';
import { typography } from '@styles/typography';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  ${typography}
  ${prism}
`;

export const GlobalStyles: React.FC = () => {
  return <CustomStyles />;
};
