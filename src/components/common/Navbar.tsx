import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
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
  color: ${props => props.theme.white};
`;
