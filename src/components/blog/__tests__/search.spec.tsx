import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MdxFields } from '@types';
import faker from 'faker';
import { flatMap, groupBy, uniq } from 'lodash';
import React from 'react';
import { Search } from '../search';

// Strong as the opposite of a weak type
type StrongMdxFields = {
  [K in keyof MdxFields]-?: NonNullable<MdxFields[K]>;
};

const posts = [
  createMockPost({ categories: ['reactjs'] }),
  createMockPost({ categories: ['html'] }),
  createMockPost({ categories: ['javascript'] }),
];

const categories = uniq(flatMap(posts, post => post.categories)) as string[];

describe('Search', () => {
  it('should initially render all posts', () => {
    render(<Search posts={posts} categories={categories} />);

    posts.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeVisible();
    });
  });

  it('should filter posts by category', () => {
    render(<Search posts={posts} categories={categories} />);

    const filterElement = screen.getByText('reactjs');

    expect(filterElement).toBeVisible();

    userEvent.click(filterElement);

    const { true: reactPosts, false: nonReactPosts } = groupBy(
      posts,
      ({ categories }) => categories.includes('reactjs')
    );

    reactPosts.forEach(({ title }) =>
      expect(screen.getByText(title)).toBeVisible()
    );

    nonReactPosts.forEach(({ title }) =>
      expect(screen.queryByText(title)).toBeNull()
    );
  });
});

function createMockPost(overrides?: Partial<MdxFields>): StrongMdxFields {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    slug: faker.lorem.slug(),
    date: faker.date.past().toISOString(),
    banner: null,
    bannerCredit: faker.internet.userName(),
    bannerCreditUrl: faker.internet.url(),
    categories: [''],
    ...overrides,
  } as StrongMdxFields;
}
