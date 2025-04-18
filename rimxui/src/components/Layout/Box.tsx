import { CSSProperties, forwardRef } from "react";

import { BoxProps } from "@types";
import {
  getAppearanceClasses,
  getBoxClasses,
  getCustomColorStyles,
  getSizeClasses,
  getSpacingClasses,
  mc,
} from "@utils";

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = "div",
      children,
      className = "",
      style,
      // Extract props so they don't get passed to the DOM element
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      p,
      px,
      py,
      pt,
      pb,
      pl,
      pr,
      bg,
      color,
      borderColor,
      shadow,
      rounded,
      border,
      width,
      height,
      minW,
      maxW,
      minH,
      maxH,
      position,
      display,
      overflow,
      overflowX,
      overflowY,
      ...restProps
    },
    ref,
  ) => {
    const Component = as;

    const boxClasses = mc(
      getSpacingClasses({
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
      }),
      getAppearanceClasses({ bg, color, borderColor, shadow, rounded, border }),
      getSizeClasses({
        width,
        height,
        minW,
        maxW,
        minH,
        maxH,
      }),
      getBoxClasses({ position, display, overflow, overflowX, overflowY }),
      className,
    );

    const customColorStyles = getCustomColorStyles({ bg, color, borderColor });
    const combinedStyles: CSSProperties = {
      ...customColorStyles,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={boxClasses}
        style={combinedStyles}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
