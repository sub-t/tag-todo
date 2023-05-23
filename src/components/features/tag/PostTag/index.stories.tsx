import { Meta, StoryObj } from '@storybook/react';
import { PostTag } from '.';

const meta: Meta<typeof PostTag> = {
  component: PostTag,
};

export default meta;
type Story = StoryObj<typeof PostTag>;

export const Default: Story = {};
