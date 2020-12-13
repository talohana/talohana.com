import { MdxFields } from '@types';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { UppercaseHeading } from '../common/uppercase-heading';

type Props = {
  post: MdxFields;
};

export const PostPreview: React.FC<Props> = ({ post }) => {
  const { title, description, date, slug, banner } = post;

  if (!slug) {
    return null;
  }

  return (
    <Wrapper to={slug}>
      {banner?.childImageSharp && (
        <PreviewImage fluid={banner.childImageSharp.fluid as FluidObject} />
      )}
      <PreviewInfo>
        {title && <PreviewHeading as="h4">{title}</PreviewHeading>}
        {date && <span>{date}</span>}
        {description && <p>{description}</p>}
      </PreviewInfo>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  ${tw`flex flex-col md:flex-row transition duration-300 hover:shadow-xl`}
  ${tw`text-black dark:text-white font-normal hover:no-underline`}
`;

const PreviewImage = tw(Image)`h-1/2 md:w-1/2`;

const PreviewHeading = styled(UppercaseHeading)`
  ${tw`text-primary my-2`}
`;

const PreviewInfo = tw.div`flex-1 p-4`;
