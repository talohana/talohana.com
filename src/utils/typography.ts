import Typography from 'typography';
import theme from 'typography-theme-irving';

// TODO: Find a way to override this with overrideThemeStyles
theme.bodyFontFamily = ['Open Sans', 'sans-serif'];

const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;

export default typography;
