import { links } from '@/lib/constants';
import { getYear } from 'date-fns';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

type LinkMeta = {
  element: React.ReactElement;
  href: string;
  // aria labels are used when the element is an icon
  ariaLabel?: string;
};

const linksMeta: LinkMeta[] = [
  {
    element: <AiOutlineGithub />,
    href: links.github,
    ariaLabel: 'Tal Ohana Github',
  },
  {
    element: <AiOutlineLinkedin />,
    href: links.linkedin,
    ariaLabel: 'Tal Ohana LinkedIn',
  },
  {
    element: <AiOutlineTwitter />,
    href: links.twitter,
    ariaLabel: 'Tal Ohana Twitter',
  },
];

const FooterLinks: React.VFC = () => (
  <ul className="flex space-x-2 text-2xl">
    {linksMeta.map(({ element, href, ariaLabel }) => (
      <li className="p-2 bg-primary text-gray-50 rounded-full" key={href}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {element}
        </a>
      </li>
    ))}
  </ul>
);

const Copy: React.VFC = () => (
  <span role="contentinfo" className="text-center">
    <span>&copy; {getYear(Date.now())} Tal Ohana. </span>{' '}
    <span className="font-light">All Rights Reserved.</span>
  </span>
);

export const Footer: React.VFC = () => {
  return (
    <footer className="py-8 border-t border-t-gray-400 border-opacity-20">
      <div className="flex flex-col justify-center items-center space-y-6">
        <FooterLinks />
        <Copy />
      </div>
    </footer>
  );
};
