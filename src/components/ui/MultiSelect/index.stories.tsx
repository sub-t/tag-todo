import { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '.';
import { Box } from '../Box';

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  args: {
    items: [
      { label: 'label', value: '1' },
      { label: 'short name', value: '2' },
      { label: 'very long name label', value: '3' },
      { label: 'label', value: '4' },
      { label: 'vs', value: '5' },
      { label: 'label', value: '6' },
    ],
    onSelect: (values) => {
      console.log(values);
    },
    fallback: <Box css={{ fontSize: '0.85rem' }}>現在タグがありません</Box>,
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    selectedItemValues: [],
  },
};

export const SelectSomeItems: Story = {
  args: {
    selectedItemValues: ['1', '3'],
  },
};

export const NoContent: Story = {
  args: {
    items: [],
  },
};
