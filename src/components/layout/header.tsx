import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ThemeToggle } from '../common/theme-toggle';

interface NavigationMeta {
  name: string;
  href: string;
}

interface NavLinkProps {
  meta: NavigationMeta;
  onClick?: () => void;
  className?: string;
}

const navigation: NavigationMeta[] = [
  { name: 'home', href: '/' },
  { name: 'blog', href: '/blog' },
];

const NavLink: React.VFC<NavLinkProps> = ({ meta, onClick, className }) => {
  const { name, href } = meta;
  const { pathname } = useRouter();
  const active = href === '/' ? pathname === '/' : pathname.includes(href);
  const classes = clsx(
    'capitalize block text-xl py-1 font-medium border-b-primary',
    className,
    {
      'border-b-2': active,
    }
  );

  return (
    <Link href={href}>
      <a className={classes} onClick={() => onClick?.()}>
        {name}
      </a>
    </Link>
  );
};

export const Header: React.VFC = () => {
  return (
    <Disclosure
      as="nav"
      className="py-4 border-b border-b-gray-400 border-opacity-20"
    >
      {({ open, close }) => (
        <>
          <div className="flex justify-between items-center">
            <Disclosure.Button className="md:hidden text-2xl">
              <span className="sr-only">Open navigation menu</span>
              {open ? (
                <AiOutlineClose aria-hidden="true" />
              ) : (
                <AiOutlineMenu aria-hidden="true" />
              )}
            </Disclosure.Button>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navigation.map(meta => (
                <NavLink meta={meta} key={meta.name} />
              ))}
            </div>
            <ThemeToggle />
          </div>
          {/* Mobile Navigation */}
          <Transition
            show={open}
            as={Disclosure.Panel}
            className="md:hidden flex flex-col"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {navigation.map(meta => (
              <NavLink meta={meta} key={meta.name} onClick={close} />
            ))}
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
