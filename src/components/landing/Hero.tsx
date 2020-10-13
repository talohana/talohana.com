import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { config } from '../../config/config';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { ScrollLink } from '../common/ScrollLink';

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Intro>
        <Details>
          <h1>Hi There!</h1>
          <h3>I'm Tal Ohana and I'm a Software Developer!</h3>
        </Details>
        <HeroImage></HeroImage>
      </Intro>
      <ScrollLink
        to="posts"
        smooth={config.scroll.smooth}
        duration={config.scroll.duration}
      >
        <Button>let's go!</Button>
      </ScrollLink>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  height: 100vh;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

const Details = styled.div`
  margin-right: 2rem;

  ${media.lessThan('large')`
    margin-right: 0;
    margin-bottom: 3rem;
  `}
`;

const HeroImage = styled.div`
  flex: 1;
`;
