import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { Calendar } from '.';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  args: {
    onClick: (date) => {
      console.log(date);
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const SelectTwoDaysAhead: Story = {
  args: {
    date: dayjs().add(2, 'day').toDate(),
  },
};
