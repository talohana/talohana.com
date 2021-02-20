import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../common/container';
const Wrapper = styled.section`
  height: 60vh;

  ${tw`relative z-0`}
`;

const Backdrop = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));

  ${tw`w-full h-full absolute top-0 left-0 z-20`}
`;

const StyledContainer = styled(Container)`
  ${tw`flex flex-col justify-center h-full text-white absolute top-0 left-1/2 transform -translate-x-1/2 z-30`}

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
      <StaticImage
        src="../../images/hero.jpg"
        alt="Hero Image"
        style={{ height: '100%', zIndex: 10 }}
      />
      <Backdrop />
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I&apos;m Tal Ohana, a Software Engineer</h2>
      </StyledContainer>
    </Wrapper>
  );
};
