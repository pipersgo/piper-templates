import React, { useState } from "react";
import { Button } from "./ui/button";

export const Counter: React.FC<React.ComponentProps<typeof Button>> = (
  props,
) => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)} {...props}>
      {count}
    </Button>
  );
};
