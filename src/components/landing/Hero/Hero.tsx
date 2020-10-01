import React from 'react';
import codeThinking from '../../../assets/illustrations/code_thinking.svg';
import { Button } from '../../common/Button/Button';
import { Details, Intro, Thumbnail, Wrapper } from './styles';
import { Link } from 'react-scroll';
export const Hero = () => {
  return (
    <Wrapper>
      <Intro>
        <Details>
          <h1>Hi There!</h1>
          <h3>I'm Tal Ohana and I'm a Software Developer!</h3>
        </Details>
        <Thumbnail>
          <img src={codeThinking} alt="Web Developer Logo" />
        </Thumbnail>
      </Intro>
      <Link to="posts" smooth={true} duration={500}>
        <Button>let's go!</Button>
      </Link>
    </Wrapper>
  );
};
