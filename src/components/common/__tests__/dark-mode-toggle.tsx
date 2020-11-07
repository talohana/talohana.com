import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DarkModeToggle } from '../dark-mode-toggle';

describe('DarkModeToggle', () => {
  it('should toggle on click', () => {
    const toggleMock = jest.fn();

    render(<DarkModeToggle colorMode="dark" setColorMode={toggleMock} />);

    const toggle = screen.getByLabelText('Toggle Dark Mode');

    userEvent.click(toggle);

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
