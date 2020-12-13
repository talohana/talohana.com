import { config } from '@config';
import { useScrollPosition } from '@hooks/use-scroll-position';
import { ColorModeContext } from '@providers/color-mode-provider';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import brand from '../../images/brand.svg';
import { DarkModeToggle } from './dark-mode-toggle';
import { NavLinks } from './nav-links';

export const Header: React.FC = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);
  const [visible, setVisible] = React.useState(true);

  useScrollPosition(({ currentPosition, previousPosition }) => {
    setVisible(() => {
      return (
        currentPosition.y < previousPosition.y ||
        currentPosition.y < config.header.hideThresholdPx
      );
    });
  });

  return (
    <Wrapper visible={visible}>
      <Brand to="/">
        <img src={brand} alt="Brand Logo" />
      </Brand>
      <NavLinks />
      <DarkModeToggle colorMode={colorMode} setColorMode={setColorMode} />
    </Wrapper>
  );
};

const Wrapper = styled.header<{ visible: boolean }>(({ visible }) => [
  tw`flex items-center w-full h-12 fixed px-4 bg-primary left-0 transition-all duration-300 z-50`,
  visible ? tw`top-0` : tw`-top-12`,
]);

const Brand = styled(Link)`
  ${tw`flex items-center mr-auto w-16`}
`;
