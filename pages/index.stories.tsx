import { Layout } from '@components/layout';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from './index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => (
  <Layout>
    <Home />
  </Layout>
);

export const Default = () => <Template />;
