import { MdxFields } from '@models';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  post: MdxFields;
};

const Wrapper = styled(Link)`
  ${tw`grid lg:(grid-cols-2 items-center gap-4)`}
  ${tw`transition duration-300 hover:shadow-xl text-black dark:text-white font-normal hover:no-underline`}
`;

const PreviewImage = tw(Img)`w-full`;
const PreviewDetails = tw.article`p-2 lg:p-0`;

export const PostPreview: React.FC<Props> = ({ post }) => {
  const { title, description, date, slug, banner } = post;

  if (!slug) {
    return null;
  }

  return (
    <Wrapper to={slug} aria-label={title ?? ''}>
      {banner?.childImageSharp && (
        <PreviewImage
          fluid={banner.childImageSharp.fluid as FluidObject}
          alt={title || ''}
        />
      )}
      <PreviewDetails>
        {title && <h3 tw="text-primary my-2 uppercase">{title}</h3>}
        {date && <span>{date}</span>}
        {description && <p>{description}</p>}
      </PreviewDetails>
    </Wrapper>
  );
};
