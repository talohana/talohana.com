import { File } from '@types';
import { graphql, useStaticQuery } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../common/container';

const Wrapper = styled.section`
  position: relative;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
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

const StyledImage = tw(Image)`z--100 w-screen h-full top-0 left-0`;

const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export const Hero: React.FC = () => {
  const { heroImage } = useStaticQuery<{ heroImage: File }>(query);

  return (
    <Wrapper>
      <StyledImage
        style={{ position: 'absolute' }}
        fluid={heroImage.childImageSharp?.fluid as FluidObject}
      />
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I&apos;m Tal Ohana, a Software Engineer</h2>
      </StyledContainer>
    </Wrapper>
  );
};
