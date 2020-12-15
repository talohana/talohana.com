import { ColorMode } from '@types';
import React from 'react';
import { BsSun } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
};

export const DarkModeToggle: React.FC<Props> = ({
  colorMode,
  setColorMode,
}) => {
  const darkMode = colorMode === 'dark';

  return (
    <Wrapper
      data-testid="dark-mode-toggle"
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
    >
      <RiMoonClearFill style={{ top: darkMode ? '50%' : '-150%' }} />
      <BsSun style={{ top: darkMode ? '150%' : '50%' }} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  ${tw`w-6 h-6 relative overflow-hidden`}

  svg {
    ${tw`w-full h-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-yellow-500 dark:text-white`}
  }
`;
