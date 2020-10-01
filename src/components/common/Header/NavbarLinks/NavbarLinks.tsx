import React from 'react';
import { Link } from 'react-scroll';
import { useConfig } from '../../../../hooks/useConfig';

const NavbarLinks = () => {
  const config = useConfig();

  return (
    <div>
      <Link to="posts" smooth={true} duration={config.scroll.duration}>
        Posts
      </Link>
    </div>
  );
};

export default NavbarLinks;
