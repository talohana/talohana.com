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

const Wrapper = tw.div`inline-block w-6 h-6`;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  id: 'dark-toggle',
})`
  ${tw`hidden`}
`;

const Toggle = styled.label.attrs({
  htmlFor: 'dark-toggle',
  'aria-label': 'Toggle Dark Mode',
})<{
  darkMode: boolean;
}>`
  ${tw`inline-block relative cursor-pointer w-full h-full overflow-hidden`}

  svg {
    ${tw`w-full h-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-yellow-500 dark:text-white`}
  }
`;
