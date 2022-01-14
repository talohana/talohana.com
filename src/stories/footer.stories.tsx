import { Footer } from '@/components/layout/footer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Default = Template.bind({});
