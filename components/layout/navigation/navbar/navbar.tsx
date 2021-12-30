import brand from '@public/brand.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Brand: React.VFC = () => (
  <Link href="/">
    <a>
      <Image alt="Tal Ohana in handwriting" src={brand} />
    </a>
  </Link>
);

const NavigationLinks: React.VFC = () => (
  <ul className="uppercase flex space-x-4 ">
    <li>
      <Link href="/">
        <a>home</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>blog</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>about</a>
      </Link>
    </li>
  </ul>
);

export const NavBar: React.VFC = () => {
  return (
    <nav className="bg-dark p-8 text-white flex justify-between">
      <Brand />
      <NavigationLinks />
    </nav>
  );
};
