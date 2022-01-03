import {
  render,
  RenderOptions,
  RenderResult,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, ThemeProviderProps, useTheme } from 'next-themes';
import { ReactElement } from 'react';
import { ThemeToggle } from './theme-toggle';

const HelperComponent = () => {
  const { theme } = useTheme();

  return (
    <>
      <span data-testid="theme">{theme}</span>
      <ThemeToggle />
    </>
  );
};

describe('ThemeToggle', () => {
  it('should toggle dark theme to light theme', () => {
    renderWithThemeProvider(<HelperComponent />, { defaultTheme: 'dark' });

    const toggle = screen.getByRole('button');
    const theme = screen.getByTestId('theme');

    expect(theme).toHaveTextContent('dark');

    userEvent.click(toggle);

    expect(theme).toHaveTextContent('light');
  });

  it('should toggle light theme to dark theme', () => {
    renderWithThemeProvider(<HelperComponent />, { defaultTheme: 'light' });

    const toggle = screen.getByRole('button');
    const theme = screen.getByTestId('theme');

    expect(theme).toHaveTextContent('light');

    userEvent.click(toggle);

    expect(theme).toHaveTextContent('dark');
  });
});

const renderWithThemeProvider = (
  ui: ReactElement,
  themeProviderProps?: ThemeProviderProps,
  options?: RenderOptions
): RenderResult => {
  return render(
    <ThemeProvider {...themeProviderProps}>{ui}</ThemeProvider>,
    options
  );
};
