import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { config } from '../../../config';

export const NavbarLinks = () => {
  return (
    <div>
      <Link
        to="posts"
        smooth={config.scroll.smooth}
        duration={config.scroll.duration}
      >
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
