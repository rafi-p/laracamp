// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import Badge from "../../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;
export const Success: Story = {
  args: {
    state: "success",
  },
  render: (args) => <Badge {...args}>Success</Badge>,
};

export const Warning: Story = {
  args: {
    state: "warning",
  },
  render: (args) => <Badge {...args}>Warning</Badge>,
};

export const Danger: Story = {
  args: {
    state: "danger",
  },
  render: (args) => <Badge {...args}>Danger</Badge>,
};
