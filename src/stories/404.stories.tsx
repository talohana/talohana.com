import Custom404 from '@/pages/404';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/404',
  component: Custom404,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Custom404>;

const Template: ComponentStory<typeof Custom404> = args => (
  <Custom404 {...args} />
);

export const Default = Template.bind({});
