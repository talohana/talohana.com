import { ColorModeContext } from '@providers/color-mode-provider';
import { ColorMode } from '@types';
import { transparentize } from 'polished';
import React from 'react';
import styled from 'styled-components';

export const HorizontalRule: React.FC = () => {
  const { colorMode } = React.useContext(ColorModeContext);

  return <StyledHorizontalRule colorMode={colorMode} />;
};

const StyledHorizontalRule = styled.hr<{ colorMode: ColorMode }>`
  background: ${props =>
    transparentize(
      0.8,
      props.colorMode === 'dark' ? props.theme.white : props.theme.black
    )};
`;
