import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import brand from '../../assets/illustrations/brand.svg';
import { config } from '../../config/config';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { ColorModeContext } from '../../providers/ColorModeProvider';
import { ColorMode } from '../../types';
import { DarkModeToggle } from './DarkModeToggle';
import { NavLinks } from './NavLinks';

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
    <Wrapper visible={visible} colorMode={colorMode}>
      <Brand to="/">
        <img src={brand} alt="Brand Logo"></img>
      </Brand>
      <NavLinks />
      <DarkModeToggle colorMode={colorMode} setColorMode={setColorMode} />
    </Wrapper>
  );
};

const Wrapper = styled.header<{ visible: boolean; colorMode: ColorMode }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: ${props =>
    props.colorMode === 'light' ? props.theme.white : props.theme.black};
  padding: 0 1rem;
  position: fixed;
  top: ${props => (props.visible ? 0 : '-3.5rem')};
  left: 0;
  transition: top 0.3s;
  z-index: 1000;
`;

const Brand = styled(Link)`
  width: 4rem;
  display: flex;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;
