import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Layout } from './layout';

export default {
  title: 'Navigation/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default: ComponentStory<typeof Layout> = () => <Template />;

export const WithContent: ComponentStory<typeof Layout> = () => (
  <Template>
    <div>Content</div>
  </Template>
);
