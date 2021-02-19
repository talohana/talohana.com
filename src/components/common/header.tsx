import brand from '@images/brand.svg';
import { ColorModeContext } from '@providers/color-mode-provider';
import { Link } from 'gatsby';
import React from 'react';
import Headroom from 'react-headroom';
import tw from 'twin.macro';
import { DarkModeToggle } from './dark-mode-toggle';
import { NavLinks } from './nav-links';

const Wrapper = tw.header`flex justify-between items-center w-full h-12 px-4 bg-primary z-50`;

const StyledHeadroom = tw(Headroom)`h-12 bg-primary`;

const Brand = tw(Link)`flex items-center w-16`;

const Right = tw.div`flex items-center space-x-4`;

export const Header: React.FC = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);

  return (
    <StyledHeadroom>
      <Wrapper>
        <Brand to="/">
          <img src={brand} alt="Brand Logo" />
        </Brand>
        <Right>
          <NavLinks />
          <DarkModeToggle colorMode={colorMode} setColorMode={setColorMode} />
        </Right>
      </Wrapper>
    </StyledHeadroom>
  );
};
