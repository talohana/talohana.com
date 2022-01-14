import { Badge } from '@/components/common/badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => (
  <Badge {...args}>Example</Badge>
);

export const Default = Template.bind({});
