import type { Meta, StoryObj } from "@storybook/react-vite";
import { cn } from "@repo/ui/lib/utils";

import { Button } from "@repo/ui/components/ui/button";

const meta = {
  component: Button,
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClassNameWidth40: Story = {
  args: {
    className: cn("w-40 bg-green-300 text-black"),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};
