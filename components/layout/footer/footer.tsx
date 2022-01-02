import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

type LinkMeta = {
  label: React.ReactElement;
  href: string;
};

const links: LinkMeta[] = [
  { label: <AiOutlineGithub />, href: 'https://github.com' },
  { label: <AiOutlineLinkedin />, href: 'https://linkedin.com' },
  { label: <AiOutlineTwitter />, href: 'https://twitter.com' },
];

const FooterLinks: React.VFC = () => (
  <ul className="flex space-x-2 text-2xl">
    {links.map(({ label, href }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </li>
    ))}
  </ul>
);

const Copy: React.VFC = () => (
  <span>&copy; 2020-present Tal Ohana. All Rights Reserved.</span>
);

export const Footer: React.VFC = () => {
  return (
    <footer className="py-10 px-4 border-t border-t-gray-400 border-opacity-50">
      <div className="container flex flex-col justify-center items-center space-y-4">
        <FooterLinks />
        <Copy />
      </div>
    </footer>
  );
};
