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
    <>
      <Placeholder />
      <Wrapper visible={visible}>
        <Brand to="/">
          <img src={brand} alt="Brand Logo" />
        </Brand>
        <Right>
          <NavLinks />
          <DarkModeToggle colorMode={colorMode} setColorMode={setColorMode} />
        </Right>
      </Wrapper>
    </>
  );
};

const Placeholder = tw.div`bg-primary h-12`;

const Wrapper = styled.header<{ visible: boolean }>(({ visible }) => [
  tw`flex justify-between items-center w-full h-12 fixed px-4 bg-primary left-0 transition-all duration-200 z-50`,
  visible ? tw`top-0` : tw`-top-12`,
]);

const Brand = tw(Link)`flex items-center w-16`;

const Right = tw.div`flex items-center space-x-4`;
