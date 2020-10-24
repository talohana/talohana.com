import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const NavLinks: React.FC = () => {
  return (
    <Wrapper>
      <NavLink to="/blog">blog</NavLink>
      <NavLink to="/about">about</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-right: 0.5rem;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 0.5rem;
`;
