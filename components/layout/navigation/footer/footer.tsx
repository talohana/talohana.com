import React from 'react';

const FooterLinks: React.VFC = () => (
  <ul>
    <li className="text-primary">Links</li>
    <li>
      <a href="#">
        <span>LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="#">Twitter</a>
    </li>
    <li>
      <a href="#">GitHub</a>
    </li>
  </ul>
);

const Copy: React.VFC = () => (
  <span className="text-primary">
    &copy; 2020-present Tal Ohana. All Rights Reserved.
  </span>
);

export const Footer: React.VFC = () => {
  return (
    <footer className="w-full py-12 bg-dark text-white">
      <div className="container flex justify-between">
        <div className="flex items-center">
          <Copy />
        </div>
        <FooterLinks />
      </div>
    </footer>
  );
};
