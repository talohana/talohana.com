import { File } from '@types';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { BackgroundSection } from '../common/background-section';
import { Container } from '../common/container';

export const Hero: React.FC = () => {
  const { heroImage } = useStaticQuery<{ heroImage: File }>(query);

  const backgroundImageStack = [
    'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
    heroImage.childImageSharp?.fluid as FluidObject,
  ];

  return (
    <Wrapper fluid={backgroundImageStack}>
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I'm Tal Ohana, a Software Engineer</h2>
      </StyledContainer>
    </Wrapper>
  );
};

const Wrapper = styled(BackgroundSection)`
  height: 65vh;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: ${props => props.theme.white};

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }
`;

const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
