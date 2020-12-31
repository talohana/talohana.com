import { MdxFields } from '@types';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  post: MdxFields;
};

const Wrapper = styled(Link)`
  ${tw`flex flex-col justify-between lg:flex-row transition-colors duration-300 hover:shadow-xl`}
  ${tw`text-black dark:text-white font-normal hover:no-underline`}
`;

const PreviewImage = tw(Image)`h-1/2 lg:w-1/2`;

const PreviewInfo = tw.article`block flex-1 p-1 lg:p-4`;

export const PostPreview: React.FC<Props> = ({ post }) => {
  const { title, description, date, slug, banner } = post;

  if (!slug) {
    return null;
  }

  return (
    <Wrapper to={slug} aria-label={title ?? ''}>
      {banner?.childImageSharp && (
        <PreviewImage fluid={banner.childImageSharp.fluid as FluidObject} />
      )}
      <PreviewInfo>
        {title && <h3 tw="text-primary my-2 uppercase">{title}</h3>}
        {date && <span>{date}</span>}
        {description && <p>{description}</p>}
      </PreviewInfo>
    </Wrapper>
  );
};
