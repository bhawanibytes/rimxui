import { forwardRef } from "react";

import { RowProps } from "@types";

import { Flex } from "./Flex";

export const Row = forwardRef<HTMLElement, RowProps>(
  ({ as = "div", children, spacing, style, ...flexProps }, ref) => {
    return (
      <Flex 
        ref={ref} 
        as={as} 
        direction="row" 
        gap={spacing}
        style={style}
        {...flexProps}
      >
        {children}
      </Flex>
    );
  },
);

export const HStack = Row;
