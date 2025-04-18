import { forwardRef } from "react";

import { StackProps } from "@types";

import { Flex } from "./Flex";

export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ as = "div", children, spacing, style, ...flexProps }, ref) => {
    return (
      <Flex
        ref={ref}
        as={as}
        direction="col"
        gap={spacing}
        style={style}
        {...flexProps}
      >
        {children}
      </Flex>
    );
  },
);
