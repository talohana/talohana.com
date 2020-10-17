import React from 'react';
import styled from 'styled-components';
import { config } from '../../config/config';
import { Button } from '../common/Button';
import { ScrollLink } from '../common/ScrollLink';

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Details>
        <h1>Hi There!</h1>
        <h1>I am Tal Ohana, a software engineer based in Israel.</h1>
      </Details>
      <ScrollLink
        to="blog"
        smooth={config.scroll.smooth}
        duration={config.scroll.duration}
      >
        <Button>Show me more!</Button>
      </ScrollLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  height: 100vh;
`;

const Details = styled.div`
  margin-bottom: 3rem;

  h1:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
