import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { File } from '../../types';
import { BackgroundSection } from '../common/background-section';
import { Container } from '../common/container';

export const Hero: React.FC = () => {
  const { heroImage } = useStaticQuery<{ heroImage: File }>(query);

  const backgroundImageStack = [
    'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))',
    heroImage.childImageSharp?.fluid as FluidObject,
  ];

  return (
    <Wrapper fluid={backgroundImageStack}>
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I'm Tal Ohana, a software engineer</h2>
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
`;

const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
