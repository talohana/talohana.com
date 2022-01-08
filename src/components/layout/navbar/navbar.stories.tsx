import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavBar } from './navbar';

export default {
  title: 'Layout/Navbar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = () => <Template />;
