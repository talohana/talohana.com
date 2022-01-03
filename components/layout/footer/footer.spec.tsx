import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('should display copyright', () => {
    render(<Footer />);

    const copyright = screen.getByText(/all rights reserved/i);

    expect(copyright).toBeInTheDocument();
  });
});
