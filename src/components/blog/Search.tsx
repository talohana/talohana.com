import { isEmpty } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQueryParamState } from '../../hooks/useQueryParamState';
import { MdxEdge } from '../../types';
import { Chip } from '../common/Chip';
import { PostPreview } from './PostPreview';

interface Props {
  posts: MdxEdge[];
  categories: string[];
}

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
      ({ node }) =>
        isEmpty(search) ||
        node.fields.categories.some(category => search.includes(category))
    )
    .map(({ node }) => <PostPreview key={node.id} fields={node.fields} />);

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

  ${Chip}:not(:last-child) {
    margin-right: 0.5rem;
  }
`;