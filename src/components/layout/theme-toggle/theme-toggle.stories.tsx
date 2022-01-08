import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeToggle } from './theme-toggle';

export default {
  title: 'Layout/Theme Toggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>;

const Template = () => <ThemeToggle />;

export const Default: ComponentStory<typeof ThemeToggle> = () => <Template />;
