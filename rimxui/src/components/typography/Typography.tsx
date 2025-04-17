import { ElementType, forwardRef } from "react";

import {
  HEADING_LEVEL_STYLES,
  TYPOGRAPHY_SIZES_STYLES,
  TYPOGRAPHY_VARIANTS_STYLES,
} from "@constants";
import {
  TypographyHeadingLevels,
  TypographyProps,
  TypographyRefType,
  TypographyType,
} from "@types";
import { mc } from "@utils";

const TYPOGRAPHY_COMPONENT_MAP: Partial<Record<TypographyType, ElementType>> = {
  link: "a",
  text: "p",
  inline: "span",
};

const getHeadingElement = (level: TypographyHeadingLevels): ElementType => {
  return `h${level}` as ElementType;
};

export const Typography = forwardRef<TypographyRefType, TypographyProps>(
  (
    {
      children,
      type = "text",
      variant = "default",
      size = "md",
      className,
      as,
      ...restProps
    },
    ref,
  ) => {
    const typographyVariantStyles = TYPOGRAPHY_VARIANTS_STYLES[variant];
    const typographySizeStyles = TYPOGRAPHY_SIZES_STYLES[size];

    let headingStyles = "";
    let Component: ElementType;

    if (type === "heading" && "level" in restProps) {
      const level = restProps.level || 1;
      headingStyles = HEADING_LEVEL_STYLES[level];
      Component = as || getHeadingElement(level);
    } else {
      Component = as || TYPOGRAPHY_COMPONENT_MAP[type] || "div";
    }

    const typographyComponentStyles = mc(
      typographyVariantStyles,
      typographySizeStyles,
      headingStyles,
      className,
    );

    return (
      <Component ref={ref} className={typographyComponentStyles} {...restProps}>
        {children}
      </Component>
    );
  },
);
