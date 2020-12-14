import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DarkModeToggle } from '../dark-mode-toggle';

describe('DarkModeToggle', () => {
  it('should toggle on click', () => {
    const toggleMock = jest.fn();

    const { rerender } = render(
      <DarkModeToggle colorMode="dark" setColorMode={toggleMock} />
    );

    const toggle = screen.getByTestId('dark-mode-toggle');

    userEvent.click(toggle);

    expect(toggleMock).toHaveBeenCalledTimes(1);
    expect(toggleMock).toHaveBeenCalledWith('light');

    rerender(<DarkModeToggle colorMode="light" setColorMode={toggleMock} />);

    userEvent.click(toggle);

    expect(toggleMock).toHaveBeenCalledTimes(2);
    expect(toggleMock).toHaveBeenCalledWith('dark');
  });
});
