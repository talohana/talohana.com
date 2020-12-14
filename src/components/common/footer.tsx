import React from 'react';
import tw from 'twin.macro';
import { SocialLinks } from './social-links';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <SocialLinks />
      <div>
        &copy; All rights reserved {new Date().getFullYear()} | Tal Ohana
      </div>
    </Wrapper>
  );
};

const Wrapper = tw.footer`flex flex-col justify-center items-center text-white bg-primary py-6`;
