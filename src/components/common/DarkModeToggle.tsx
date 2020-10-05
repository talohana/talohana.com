import React from 'react';
import { BsSun } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import styled from 'styled-components';

interface Props {
  dark: boolean;
  toggle: () => void;
}

export const DarkModeToggle: React.FC<Props> = ({ dark, toggle }) => {
  return (
    <Wrapper>
      <HiddenCheckbox defaultChecked={dark} onChange={toggle} />
      <Toggle dark={dark}>
        <RiMoonClearFill style={{ top: dark ? '50%' : '-150%' }} />
        <BsSun style={{ top: dark ? '150%' : '50%' }} />
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
  dark: boolean;
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
    color: ${({ dark, theme }) => (dark ? theme.white : '#ffdd59')};
  }
`;
