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

const Wrapper = tw.nav`mr-4`;

const NavLink = styled(Link)`
  ${tw`uppercase font-normal tracking-wide p-2 rounded text-white`}

  &.active {
    ${tw`bg-primary-dark`}
  }
`;
