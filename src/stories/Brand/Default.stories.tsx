// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import Brand from "../../components/Brand";

const meta: Meta<typeof Brand> = {
  title: "Components/Brand",
  component: Brand,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Brand>;

export const Dark: Story = {
  args: {
    color: "dark",
    className: "w-32 h-16",
  },
  render: (args) => (
    <div className="bg-green min-h-min w-full p-10">
      <Brand {...args} />
    </div>
  ),
};

export const Light: Story = {
  args: {
    color: "light",
    className: "w-32 h-16",
  },
  render: (args) => (
    <div className="bg-navy min-h-min w-full p-10">
      <Brand {...args} />
    </div>
  ),
};
