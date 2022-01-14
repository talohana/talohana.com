import { PostTags } from '@/components/blog/post-tags';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Blog/Post Tags',
  component: PostTags,
} as ComponentMeta<typeof PostTags>;

const Template: ComponentStory<typeof PostTags> = args => (
  <PostTags {...args} />
);

export const Default = Template.bind({});
Default.args = { tags: ['Tag-1', 'Tag-2', 'Tag-3', 'Tag-4', 'Tag-5'] };

export const Wrapped = Template.bind({});
Wrapped.args = { ...Default.args };
Wrapped.decorators = [
  Story => (
    <div className="w-[200px]">
      <Story />
    </div>
  ),
];
