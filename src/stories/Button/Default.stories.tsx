// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import Button from "../../components/Button";
import { ReactComponent as GoogleLogo } from "../../assets/images/google-logo.svg";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    state: "primary",
  },
  render: (args) => (
    <Button {...args}>
      <button onClick={() => console.log("hi")}>Okay, got it</button>
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    state: "secondary",
  },
  render: (args) => (
    <Button {...args}>
      <button onClick={() => console.log("hi")}>Okay, got it</button>
    </Button>
  ),
};
export const Alternative: Story = {
  args: {
    state: "alternative",
    className: "border-2 border-[#E7E5F4]",
  },
  render: (args) => (
    <Button {...args}>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener horeferrer"
      >
        <GoogleLogo />
        <span className="ml-2">Sign In with Google</span>
      </a>
    </Button>
  ),
};
