import React from 'react';
import styled from 'styled-components';
import { ColorModeContext } from '../../providers/ColorModeProvider';
import { ColorMode } from '../../types';

export const Footer: React.FC = () => {
  const { colorMode } = React.useContext(ColorModeContext);

  return (
    <Wrapper colorMode={colorMode}>
      <Copy>
        &copy; All rights reserved {new Date().getFullYear()} | Tal Ohana
      </Copy>
    </Wrapper>
  );
};

const Wrapper = styled.footer<{ colorMode: ColorMode }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.colorMode === 'light' ? props.theme.white : props.theme.black};
  color: ${props =>
    props.colorMode === 'light' ? props.theme.black : props.theme.white};
  height: 10vh;
`;

const Copy = styled.div`
  margin-bottom: 0;
`;
