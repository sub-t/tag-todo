import { Meta, StoryObj } from '@storybook/react';
import { MdTaskAlt } from 'react-icons/md';
import { NavItem } from '.';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  args: {
    href: '/',
    label: 'Todo',
    icon: <MdTaskAlt />,
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {};
