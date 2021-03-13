import { ColorMode } from '@models';
import React from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
};

const Wrapper = styled.button`
  ${tw`w-6 h-6`}

  svg {
    ${tw`w-full h-full text-white`}
  }
`;

export const DarkModeToggle: React.FC<Props> = ({
  colorMode,
  setColorMode,
}) => {
  const darkMode = colorMode === 'dark';

  return (
    <Wrapper
      aria-label="Dark Mode Toggle"
      data-testid="dark-mode-toggle"
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
    >
      {darkMode ? <IoMdSunny /> : <IoMdMoon />}
    </Wrapper>
  );
};
