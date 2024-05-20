// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import Input from "../../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    wrapperClassName: "w-56",
    placeholder: "Your Email here",
    label: "Email Address",
    id: "email",
    name: "email",
    type: "email",
  },
  render: (args) => <Input {...args} />,
};

export const InputImage: Story = {
  args: {
    id: "avatar",
    name: "avatar",
    type: "file",
    accept: "image/*",
  },
  render: (args) => <Input {...args} />,
};
