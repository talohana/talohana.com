import { useQueryParamState } from '@hooks/use-query-param-state';
import { MdxFields } from '@types';
import { isEmpty } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { Chip } from '../common/chip';
import { PostPreview } from './post-preview';

type Post = MdxFields;

type Props = {
  posts: Post[];
  categories: string[];
};

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

const Posts = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${Chip} {
    margin-bottom: 0.5rem;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;
