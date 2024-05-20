// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import FeaturedSection from "../../components/FeaturedSection";
import Button from "../../components/Button";

const meta: Meta<typeof FeaturedSection> = {
  title: "Components/FeaturedSection",
  component: FeaturedSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof FeaturedSection>;
export const Default: Story = {
  args: {
    number: {
      text: "1.",
      className: "bg-yellow",
    },
    content: {
      preheading: "Better Career",
      heading: "Prepare The Journey",
      paragraph:
        "We do really care to our students’ future career so it would be good if you are taking a quick interview",
    },
    button: (
      <Button state="secondary">
        <a href="">Learn More</a>
      </Button>
    ),
    badge: {
      title: "Interview",
      content: "Before taking any program it is good to choose the path",
    },
    image: "/images/image-2.jpg",
  },
  render: (args) => <FeaturedSection {...args} />,
};
