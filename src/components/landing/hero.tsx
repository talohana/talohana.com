import { File } from '@models';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BackgroundSection } from '../common/background-section';
import { Container } from '../common/container';

const Wrapper = styled(BackgroundSection)`
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

  const backgroundImageStack = [
    'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))',
    heroImage.childImageSharp?.fluid as FluidObject,
  ];

  return (
    <Wrapper fluid={backgroundImageStack}>
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I&apos;m Tal Ohana, a Software Engineer</h2>
      </StyledContainer>
    </Wrapper>
  );
};
