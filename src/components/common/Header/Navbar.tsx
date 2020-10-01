import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import media from 'styled-media-query';
import rocketLaunch from '../../../assets/illustrations/rocket_launch.svg';
import { useConfig } from '../../../hooks/useConfig';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { NavbarLinks } from './NavbarLinks';

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

const Wrapper = styled.nav<{ visible: boolean }>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 0 2rem;
  position: fixed;
  top: ${props => (props.visible ? 0 : '-3.5rem')};
  left: 0;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  transition: top 0.3s;

  ${media.lessThan('large')`
    padding: 0 0.5rem;
  `}
`;

const Brand = styled(Link)`
  margin-right: 1rem;
  width: 2rem;
  display: flex;
  align-items: center;

  img {
    margin-bottom: 0;
  }
`;
