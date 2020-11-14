import { renderWithTheme } from '@test-utils/custom-render';
import { screen } from '@testing-library/react';
import React from 'react';
import { NavLinks } from '../nav-links';

describe('NavLinks', () => {
  it('should contain blog link', () => {
    renderWithTheme(<NavLinks />);

    const link = screen.getByText('blog');

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/blog');
  });

  it('should contain about link', () => {
    renderWithTheme(<NavLinks />);

    const link = screen.getByText('about');

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/about');
  });
});
