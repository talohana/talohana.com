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

const links: LinkMeta[] = [
  {
    element: <AiOutlineGithub />,
    href: 'https://github.com',
    ariaLabel: 'Tal Ohana Github',
  },
  {
    element: <AiOutlineLinkedin />,
    href: 'https://linkedin.com',
    ariaLabel: 'Tal Ohana LinkedIn',
  },
  {
    element: <AiOutlineTwitter />,
    href: 'https://twitter.com',
    ariaLabel: 'Tal Ohana Twitter',
  },
];

const FooterLinks: React.VFC = () => (
  <ul className="flex space-x-2 text-2xl">
    {links.map(({ element, href, ariaLabel }) => (
      <li key={href}>
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
  <span role="contentinfo">
    &copy; 2020-present Tal Ohana. All Rights Reserved.
  </span>
);

export const Footer: React.VFC = () => {
  return (
    <footer className="py-10 px-4 border-t border-t-gray-400 border-opacity-30">
      <div className="container flex flex-col justify-center items-center space-y-4">
        <FooterLinks />
        <Copy />
      </div>
    </footer>
  );
};
