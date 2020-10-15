import { Link } from 'gatsby';
import Image, { FluidObject, GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MdxFields } from '../../types';
import { UppercaseHeading } from '../common/UppercaseHeading';

type Props = {
  fields: MdxFields;
};

export const PostPreview: React.FC<Props> = ({ fields }) => {
  const { title, description, date, slug, banner } = fields;

  return (
    <Wrapper to={slug}>
      <PreviewImage fluid={banner?.childImageSharp?.fluid as FluidObject} />
      <PreviewInfo>
        <PreviewHeading as="h4">{title}</PreviewHeading>
        <span>{date}</span>
        <p>{description}</p>
      </PreviewInfo>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  color: var(--color-text);
  transition: all 0.3s;
  border-radius: 0.2rem;
  overflow: hidden;
  font-weight: 400;
  height: 12rem;

  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);
  }

  ${media.lessThan('large')`
    flex-direction: column;
    height: 24rem;
  `}
`;

const PreviewImage = styled(Image)<GatsbyImageProps>`
  flex: 3;

  ${media.lessThan('large')`
    flex: 4;
  `}
`;

const PreviewHeading = styled(UppercaseHeading)`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const PreviewInfo = styled.div`
  flex: 4;
  padding: 1rem;
`;
