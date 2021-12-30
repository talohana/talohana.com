import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Layout } from './layout';

export default {
  title: 'Navigation/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <div className="min-h-screen flex flex-col">
    <Layout {...args} />
  </div>
);

export const Default: ComponentStory<typeof Layout> = () => <Template />;
