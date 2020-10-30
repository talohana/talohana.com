import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders copyright', () => {
    const { getByText } = render(<Footer />);

    const copyright = getByText('All rights reserved', { exact: false });

    expect(copyright).toBeInTheDocument();
  });
});
