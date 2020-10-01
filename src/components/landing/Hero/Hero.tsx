import React from 'react';
import codeThinking from '../../../assets/illustrations/code_thinking.svg';
import { Details, Thumbnail, Wrapper } from './styles';

export const Hero = () => {
  return (
    <Wrapper>
      <Details>
        <h1>Hi There!</h1>
        <h3>I'm Tal Ohana, and I'm a Software Developer</h3>
      </Details>
      <Thumbnail>
        <img src={codeThinking} alt="Web Developer Logo" />
      </Thumbnail>
    </Wrapper>
  );
};
