import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/blog/typescript-excess-property-checks">Blog</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  color: ${props => props.theme.white};

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
