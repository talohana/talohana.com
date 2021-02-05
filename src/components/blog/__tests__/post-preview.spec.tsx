import { MdxFields } from '@models';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { PostPreview } from '../post-preview';

describe('Post Preview', () => {
  it('should not render when slug is null', () => {
    const { container } = render(
      <PostPreview
        post={{
          slug: null,
          title: 'Test Post',
          description: 'Test Description',
          date: '01/01/2018',
        }}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should display title', () => {
    const post: MdxFields = { slug: '/test', title: 'Test Post - Title' };

    render(<PostPreview post={post} />);

    expect(screen.getByText(post.title ?? '')).toBeVisible();
  });

  it('should display description', () => {
    const post: MdxFields = {
      slug: '/test',
      description: 'Test Post - Description',
    };

    render(<PostPreview post={post} />);

    expect(screen.getByText(post.description ?? '')).toBeVisible();
  });

  it('should display date', () => {
    const post: MdxFields = {
      slug: '/test',
      date: '01/01/2018',
    };

    render(<PostPreview post={post} />);

    expect(screen.getByText(post.date ?? '')).toBeVisible();
  });
});
