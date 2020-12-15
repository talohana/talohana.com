import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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

const Wrapper = tw.nav`space-x-2`;

const NavLink = styled(Link)`
  ${tw`uppercase font-normal tracking-wide p-1 rounded text-white`}

  &.active {
    ${tw`bg-primary-500`}
  }
`;
