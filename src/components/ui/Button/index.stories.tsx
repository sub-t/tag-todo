import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
