import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { TodoItem } from '.';

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  args: {
    id: '1',
    title: 'Title',
  },
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {};

export const WithTags: Story = {
  args: {
    tags: ['task', 'urgent'],
  },
};

export const WithDueDate: Story = {
  args: {
    ...WithTags.args,
    dueDate: dayjs().add(2, 'day').toDate(),
  },
};

export const Complete: Story = {
  args: {
    ...WithDueDate.args,
    complete: true,
  },
};
