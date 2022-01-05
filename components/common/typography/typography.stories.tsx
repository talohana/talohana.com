import { ComponentMeta, ComponentStory } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6 } from './typography';

type Headings =
  | typeof H1
  | typeof H2
  | typeof H3
  | typeof H4
  | typeof H5
  | typeof H6;

export default {
  title: 'Common/Typography',
  args: {
    children: 'This is a heading!',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<Headings>;

export const All = () => (
  <div>
    <H1>This is a heading 1!</H1>
    <H2>This is a heading 2!</H2>
    <H3>This is a heading 3!</H3>
    <H4>This is a heading 4!</H4>
    <H5>This is a heading 5!</H5>
    <H6>This is a heading 6!</H6>
  </div>
);

export const Heading1: ComponentStory<typeof H1> = args => <H1 {...args} />;

export const Heading2: ComponentStory<typeof H2> = args => <H2 {...args} />;

export const Heading3: ComponentStory<typeof H3> = args => <H3 {...args} />;

export const Heading4: ComponentStory<typeof H4> = args => <H4 {...args} />;

export const Heading5: ComponentStory<typeof H5> = args => <H5 {...args} />;

export const Heading6: ComponentStory<typeof H6> = args => <H6 {...args} />;
