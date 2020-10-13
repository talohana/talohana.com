import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const NavLinks: React.FC = () => {
  return (
    <Wrapper>
      <NavLink to="/blog">Blog</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${props => props.theme.white};
`;
