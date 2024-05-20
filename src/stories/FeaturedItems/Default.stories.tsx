// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/index.css";

import FeaturedItems from "../../components/FeaturedItems";
import { ReactComponent as Users } from "../../assets/images/fi-users.svg";
import { ReactComponent as Briefcase } from "../../assets/images/fi-briefcase.svg";
import { ReactComponent as Codesandbox } from "../../assets/images/fi-codesandbox.svg";
import { ReactComponent as Globe } from "../../assets/images/fi-globe.svg";

const meta: Meta<typeof FeaturedItems> = {
  title: "Components/FeaturedItems",
  component: FeaturedItems,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof FeaturedItems>;
export const Default: Story = {
  args: {
    features: [
      {
        icon: <Globe />,
        key: "diversity",
        title: "Diversity",
        paragraph: "Learn from anyone around the world and get a new skills",
      },
      {
        icon: <Codesandbox />,
        key: "guideline",
        title: "A.I Guideline",
        paragraph:
          "Lara will help you to choose which path that suitable for you",
      },
      {
        icon: <Users />,
        key: "mentoring",
        title: "1-1 Mentoring",
        paragraph: "We will ensure that you will get what you really do need",
      },
      {
        icon: <Briefcase />,
        key: "future-job",
        title: "Future Job",
        paragraph: "Get your dream job in your dream company together with us",
      },
    ],
  },
  render: (args) => <FeaturedItems {...args} />,
};
