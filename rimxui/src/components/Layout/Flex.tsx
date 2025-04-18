import { forwardRef } from "react";

import { FlexProps } from "@types";
import { getFlexClasses, mc } from "@utils";

import { Box } from "./Box";

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      as = "div",
      children,
      className = "",
      style,
      direction,
      wrap,
      align,
      justify,
      gap,
      grow,
      shrink,
      ...boxProps
    },
    ref,
  ) => {
    const flexClasses = getFlexClasses({
      direction,
      wrap,
      align,
      justify,
      gap,
      grow,
      shrink,
    });

    const combinedClasses = mc(flexClasses, className);

    return (
      <Box
        ref={ref}
        as={as}
        className={combinedClasses}
        style={style}
        {...boxProps}
      >
        {children}
      </Box>
    );
  },
);
