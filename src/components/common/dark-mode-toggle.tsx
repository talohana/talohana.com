import React from 'react';
import { BsSun } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import styled from 'styled-components';
import { ColorMode } from '../../types';

interface Props {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}

export const DarkModeToggle: React.FC<Props> = ({
  colorMode,
  setColorMode,
}) => {
  const darkMode = colorMode === 'dark';

  return (
    <Wrapper>
      <HiddenCheckbox
        defaultChecked={darkMode}
        onChange={() => {
          setColorMode(colorMode === 'dark' ? 'light' : 'dark');
        }}
      />
      <Toggle darkMode={darkMode}>
        <RiMoonClearFill style={{ top: darkMode ? '50%' : '-150%' }} />
        <BsSun style={{ top: darkMode ? '150%' : '50%' }} />
      </Toggle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
`;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  id: 'dark-toggle',
})`
  display: none;
`;

const Toggle = styled.label.attrs({ htmlFor: 'dark-toggle' })<{
  darkMode: boolean;
}>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    color: ${({ darkMode, theme }) => (darkMode ? theme.white : '#f39c12')};
  }
`;
