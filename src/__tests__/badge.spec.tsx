import { Badge } from '@/components/common/badge';
import { render, screen } from '@testing-library/react';

describe('Badge', () => {
  it('should display given text', () => {
    const text = 'Some Badge';

    render(<Badge>{text}</Badge>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
