import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../common/container';

const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(/images/hero-pattern.svg);
  background-position: center;
  background-repeat: repeat;
  height: 50vh;
`;

const StyledContainer = styled(Container)`
  ${tw`flex flex-col justify-center h-full text-white`}

  h1 {
    ${tw`text-5xl lg:text-6xl`}
  }

  h2 {
    ${tw`text-2xl lg:text-3xl`}
  }
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I&apos;m Tal Ohana, a Software Engineer</h2>
      </StyledContainer>
    </Wrapper>
  );
};
