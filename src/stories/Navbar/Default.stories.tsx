// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Link from "../../components/Link";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Navbar>;
export const Default: Story = {
  args: {
    cta: (
      <>
        <Button className="relative px-8" state="secondary">
          <a> Sign In</a>
        </Button>
        <Button className="relative px-8" state="primary">
          <a> Sign Up</a>
        </Button>
      </>
    ),
    pathname: "/program",
    className: { active: "text-purple", idle: "text-navy" },
  },
  render: (args) => (
    <Navbar {...args}>
      <Link href="/program">
        <a>Program</a>
      </Link>
      <Link href="/mentor">
        <a>Mentor</a>
      </Link>
      <Link href="/pricing">
        <a>Pricing</a>
      </Link>
      <Link href="/business">
        <a>Business</a>
      </Link>
    </Navbar>
  ),
};
