import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

const links = [
  { label: 'home', path: '/' },
  { label: 'blog', path: '/blog' },
  { label: 'about', path: '/about' },
];

const Brand: React.VFC = () => (
  <Link href="/">
    <a className="text-xl">Tal Ohana</a>
  </Link>
);

const NavLink: React.FC<{ path: string; label: string }> = ({
  path,
  label,
}) => {
  const router = useRouter();
  const classes = clsx({
    'underline underline-offset-2 decoration-primary-600':
      router.pathname === path,
  });

  return (
    <Link href={path}>
      <a className={classes}>{label}</a>
    </Link>
  );
};

const NavLinks: React.VFC = () => {
  return (
    <ul className="uppercase flex text-lg space-x-4">
      {links.map(({ label, path }) => (
        <li key={label}>
          <NavLink path={path} label={label} />
        </li>
      ))}
    </ul>
  );
};

export const NavBar: React.VFC = () => {
  return (
    <nav className="px-8 py-4 lg:px-20 lg:py-10 border-b border-b-gray-400 border-opacity-50">
      <div className="container flex justify-between">
        <Brand />
        <NavLinks />
        <ThemeToggle />
      </div>
    </nav>
  );
};
