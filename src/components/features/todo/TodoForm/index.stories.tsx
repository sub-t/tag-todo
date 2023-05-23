import { Meta, StoryObj } from '@storybook/react';
import { TodoForm } from '.';

const meta: Meta<typeof TodoForm> = {
  component: TodoForm,
};

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const Default: Story = {};
