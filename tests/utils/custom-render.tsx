import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';

const Wrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const renderWithTheme = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {}
): RenderResult =>
  render(ui, {
    ...options,
    wrapper: Wrapper,
  });
