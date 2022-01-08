import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = () => <Template />;
