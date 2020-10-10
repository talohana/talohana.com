import { Link } from 'gatsby';
import Image, { FluidObject, GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MdxFrontmatter } from '../../types';
import { UppercaseHeading } from '../common/UppercaseHeading';

type Props = {
  frontmatter: MdxFrontmatter;
};

export const PostPreview: React.FC<Props> = ({ frontmatter }) => {
  const { title, description, date, slug, banner } = frontmatter;

  return (
    <Wrapper to={`/blog/${slug}`}>
      <PreviewImage fluid={banner?.childImageSharp?.fluid as FluidObject} />
      <div>
        <UppercaseHeading as="h4">{title}</UppercaseHeading>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  padding: 1.2rem;
  color: var(--color-text);
  transition: box-shadow 0.3s;
  border-bottom: 1px solid ${({ theme }) => theme.primary};

  ${media.lessThan('medium')`
      flex-direction: column;
      padding: 0.5rem;
  `}

  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);
  }
`;

const PreviewImage = styled(Image)<GatsbyImageProps>`
  width: 40%;
  height: auto;
  margin-right: 1rem;

  ${media.lessThan('medium')`
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
  `}
`;
