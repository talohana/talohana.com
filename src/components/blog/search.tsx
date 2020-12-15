import { useQueryParamState } from '@hooks/use-query-param-state';
import { MdxFields } from '@types';
import { isEmpty } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Chip } from '../common/chip';
import { PostPreview } from './post-preview';

type Post = MdxFields;

type Props = {
  posts: Post[];
  categories: string[];
};

const Posts = tw.div`space-y-4`;

const Categories = styled.div`
  ${tw`flex flex-wrap my-4`}

  ${Chip} {
    ${tw`my-1 mr-2 last:mr-0`}
  }
`;

export const Search: React.FC<Props> = ({ posts, categories }) => {
  const [search, setSearch] = useQueryParamState('category');

  const toggleCategory = (category: string): void => {
    setSearch(prevSearch => {
      if (prevSearch.includes(category)) {
        return prevSearch.split(category).join('').trim();
      }
      return `${prevSearch.trim()} ${category}`.trim();
    });
  };

  const categoryChips = categories.map(category => (
    <Chip
      key={category}
      selected={search.includes(category)}
      onClick={() => toggleCategory(category)}
    >
      {category}
    </Chip>
  ));

  const previews = posts
    .filter(
      ({ categories }) =>
        isEmpty(search) ||
        categories?.some(category => category && search.includes(category))
    )
    .map(post => <PostPreview key={post.id} post={post} />);

  return (
    <div>
      <Categories>{categoryChips}</Categories>
      <Posts>{previews}</Posts>
    </div>
  );
};
