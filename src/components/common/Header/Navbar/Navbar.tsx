import React, { useState } from 'react';
import rocketLaunch from '../../../../assets/illustrations/rocket_launch.svg';
import { useConfig } from '../../../../hooks/useConfig';
import { useScrollPosition } from '../../../../hooks/useScrollPosition';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { Brand, Wrapper } from './styles';

export const Navbar: React.FC = () => {
  const config = useConfig();
  const [visible, setVisible] = useState(true);

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
      <Brand to="hero" smooth={true} duration={config.scroll.duration}>
        <img src={rocketLaunch} alt="Rocket Launch Logo"></img>
      </Brand>
      <NavbarLinks />
    </Wrapper>
  );
};
