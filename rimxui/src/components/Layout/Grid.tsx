import { forwardRef } from "react";

import { GridProps } from "@types";
import { getGridClasses, mc } from "@utils";

import { Box } from "./Box";

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      as = "div",
      children,
      className = "",
      style,
      cols,
      rows,
      flow,
      autoRows,
      autoCols,
      gap,
      columnGap,
      rowGap,
      placeItems,
      placeContent,
      ...boxProps
    },
    ref,
  ) => {
    const gridClasses = getGridClasses({
      cols,
      rows,
      flow,
      autoRows,
      autoCols,
      gap,
      columnGap,
      rowGap,
      placeItems,
      placeContent,
    });

    const combinedClasses = mc(gridClasses, className);

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
