import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import React from 'react';
import { MdxFields } from '../../../types';
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

describe('Search', () => {
  it('should initially render all posts', () => {
    render(
      <Search posts={posts} categories={['reactjs', 'html', 'javascript']} />
    );

    posts.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeVisible();
    });
  });

  it('should filter posts by category', () => {
    render(
      <Search posts={posts} categories={['reactjs', 'html', 'javascript']} />
    );

    const filterElement = screen.getByText('reactjs');

    expect(filterElement).toBeVisible();

    userEvent.click(filterElement);

    posts.forEach(({ title, categories }) => {
      if (categories.includes('reactjs')) {
        expect(screen.getByText(title)).toBeVisible();
      } else {
        expect(screen.queryByText(title)).toBeNull();
      }
    });
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
    keywords: [''],
    ...overrides,
  } as StrongMdxFields;
}
