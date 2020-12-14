import { MdxFields } from '@types';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Chip } from '../common/chip';

type Props = {
  post: MdxFields;
};

export const PostPreview: React.FC<Props> = ({ post }) => {
  const { title, description, date, slug, banner, categories } = post;

  if (!slug) {
    return null;
  }

  return (
    <Wrapper to={slug}>
      {banner?.childImageSharp && (
        <PreviewImage fluid={banner.childImageSharp.fluid as FluidObject} />
      )}
      <PreviewInfo>
        <div>
          {title && <h4 tw="text-primary my-2 uppercase">{title}</h4>}
          {date && <span>{date}</span>}
          {description && <p>{description}</p>}
        </div>
        {categories?.length && (
          <Categories>
            {categories.map(category => (
              <li key={category}>
                <StyledChip>{category}</StyledChip>
              </li>
            ))}
          </Categories>
        )}
      </PreviewInfo>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  ${tw`flex flex-col justify-between md:flex-row transition duration-300 hover:shadow-xl`}
  ${tw`text-black dark:text-white font-normal hover:no-underline`}
`;

const PreviewImage = tw(Image)`h-1/2 md:w-1/2`;

const Categories = tw.ul`hidden lg:flex space-x-2`;

const StyledChip = tw(Chip)`px-1.5 py-0.5`;

const PreviewInfo = tw.div`flex-1 p-1 md:p-4`;
