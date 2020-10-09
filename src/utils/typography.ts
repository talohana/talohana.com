import Typography from 'typography';
import theme from 'typography-theme-irving';

// TODO: Find a way to override this with overrideThemeStyles
theme.baseFontSize = '16px';
theme.bodyFontFamily = ['Open Sans', 'sans-serif'];
theme.googleFonts = [
  {
    name: 'Exo',
    styles: ['200', '700'],
  },
  {
    name: 'Open Sans',
    styles: ['200', '400', '700'],
  },
];

const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;

export default typography;
