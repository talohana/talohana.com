import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '../common/container';

const Wrapper = styled.section`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  height: 50vh;
`;

const StyledGatsbyImage = tw(
  GatsbyImage
)`absolute! top-0 left-0 w-full h-full z--1`;

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
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export const Hero: React.FC = () => {
  const data = useStaticQuery(query);
  const image = getImage(data.file);

  return (
    <Wrapper>
      {image && <StyledGatsbyImage image={image} alt="Woods" />}
      <StyledContainer>
        <h1>Hi There!</h1>
        <h2>I&apos;m Tal Ohana, a Software Engineer</h2>
      </StyledContainer>
    </Wrapper>
  );
};
