import { Link } from 'gatsby';
import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';

export const NavLinks: React.FC = () => {
  return (
    <Wrapper>
      <NavLink to="/blog" activeClassName="active">
        blog
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        about
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  padding: 0.5rem;
  border-radius: 0.2rem;

  &.active {
    background-color: ${props => darken(0.1, props.theme.primary)};
  }
`;
