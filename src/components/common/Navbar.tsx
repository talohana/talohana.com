import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import media from 'styled-media-query';
import { config } from '../../config';

export const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Link
        to="posts"
        smooth={config.scroll.smooth}
        duration={config.scroll.duration}
      >
        Posts
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  a {
    transition: all 0.3s;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid currentColor;
    }
  }

  ${media.lessThan('large')`
    a {
      &, &:hover {
        border-bottom: 0;
      }
    }
  `}
`;
