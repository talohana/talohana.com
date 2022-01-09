import { ThemeToggle } from '@/components/common/theme-toggle';
import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navigation = [
  { label: 'home', path: '/' },
  { label: 'blog', path: '/blog' },
];

const NavLink: React.FC<{ path: string; label: string }> = ({
  path,
  label,
}) => {
  const { pathname } = useRouter();
  const classes = clsx('block py-2 px-4 capitalize font-medium', {
    'text-primary': path === '/' ? pathname === path : pathname.includes(path),
  });

  return (
    <Link href={path}>
      <a>
        <Disclosure.Button className={classes}>{label}</Disclosure.Button>
      </a>
    </Link>
  );
};

const NavLinks: React.VFC = () => {
  return (
    <ul className="text-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
      {navigation.map(({ label, path }) => (
        <li key={label}>
          <NavLink path={path} label={label} />
        </li>
      ))}
    </ul>
  );
};

export const Header: React.VFC = () => {
  return (
    <header className="border-b border-b-gray-400 border-opacity-20">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center py-4">
              <Disclosure.Button id="bla" className="text-2xl md:hidden">
                <span className="sr-only">Open navigation menu</span>
                {open ? (
                  <AiOutlineClose aria-hidden="true" />
                ) : (
                  <AiOutlineMenu aria-hidden="true" />
                )}
              </Disclosure.Button>
              <div className="hidden md:block">
                <NavLinks />
              </div>
              <ThemeToggle />
            </div>
            <Disclosure.Panel className="md:hidden">
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <NavLinks />
              </Transition>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};