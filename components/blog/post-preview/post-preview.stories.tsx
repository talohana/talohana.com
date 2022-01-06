import { ComponentMeta, ComponentStory } from '@storybook/react';
import { sub } from 'date-fns';
import { PostPreview } from './post-preview';

export default {
  title: 'Blog/Post Preview',
  component: PostPreview,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof PostPreview>;

const Template: ComponentStory<typeof PostPreview> = props => (
  <PostPreview {...props} />
);

export const Default = () => (
  <Template
    post={{
      slug: 'test-post',
      title: 'Test Post',
      description: 'This is the description of Test Post',
      content: '',
      createdAt: sub(new Date(), { days: 1 }).getTime(),
    }}
  />
);
