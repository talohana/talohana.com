import React from 'react';
import { Wrapper, Copy } from './styles';

export const Footer = () => {
  return (
    <Wrapper>
      <Copy>
        &copy; All rights reserved {new Date().getFullYear()} | Tal Ohana{' '}
      </Copy>
    </Wrapper>
  );
};
