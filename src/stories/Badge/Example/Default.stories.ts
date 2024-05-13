// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../../../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge/Example',
  component: Badge,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Success: Story = {
  args: {
    state: 'success',
  }
};