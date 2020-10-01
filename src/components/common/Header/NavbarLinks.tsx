import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { useConfig } from '../../../hooks/useConfig';

export const NavbarLinks = () => {
  const config = useConfig();

  return (
    <div>
      <Link to="posts" smooth={true} duration={config.scroll.duration}>
        Posts
      </Link>
    </div>
  );
};

const ScrollLink = styled(Link)`
  color: ${props => props.theme.white};
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.white};
    border-bottom: 1px solid currentColor;
  }
`;
