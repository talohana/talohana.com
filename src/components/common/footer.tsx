import { ColorModeContext } from '@providers/color-mode-provider';
import { ColorMode } from '@types';
import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from './social-links';

export const Footer: React.FC = () => {
  const { colorMode } = React.useContext(ColorModeContext);

  return (
    <Wrapper colorMode={colorMode}>
      <SocialLinks />
      <Copy>
        &copy; All rights reserved {new Date().getFullYear()} | Tal Ohana
      </Copy>
    </Wrapper>
  );
};

const Wrapper = styled.footer<{ colorMode: ColorMode }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};
  padding: 1rem 0;
`;

const Copy = styled.div`
  margin-bottom: 0;
`;
