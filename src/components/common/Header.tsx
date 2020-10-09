import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import rocketLaunch from '../../assets/illustrations/rocket_launch.svg';
import { config } from '../../config';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { ColorModeContext } from '../../providers/ColorModeProvider';
import { DarkModeToggle } from './DarkModeToggle';
import { Navbar } from './Navbar';

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
      <Brand
        to="hero"
        smooth={config.scroll.smooth}
        duration={config.scroll.duration}
      >
        <img src={rocketLaunch} alt="Rocket Launch Logo"></img>
      </Brand>
      <Navbar />
      <DarkModeToggle colorMode={colorMode} setColorMode={setColorMode} />
    </Wrapper>
  );
};

const Wrapper = styled.header<{ visible: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.primary};
  padding: 0 1rem;
  position: fixed;
  top: ${props => (props.visible ? 0 : '-3.5rem')};
  left: 0;
  transition: top 0.3s;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  nav {
    margin-right: auto;
  }
`;

const Brand = styled(Link)`
  width: 2.5rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;

  img {
    margin-bottom: 0;
  }
`;
