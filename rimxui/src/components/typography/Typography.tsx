import { ElementType, forwardRef } from "react";

import {
  DEFAULT_HEADING_WEIGHTS,
  FONT_WEIGHT_STYLES,
  HEADING_SIZE_SCALES,
  TEXT_SIZES_STYLES,
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
      weight,
      className,
      as,
      ...restProps
    },
    ref,
  ) => {
    const typographyVariantStyles = TYPOGRAPHY_VARIANTS_STYLES[variant];

    let sizeStyles = "";
    let weightStyles = "";
    let Component: ElementType;

    if (type === "heading" && "level" in restProps) {
      const level = restProps.level || 1;

      const headingSizeScale = HEADING_SIZE_SCALES[level];

      sizeStyles = headingSizeScale[size];

      const headingWeight = weight || DEFAULT_HEADING_WEIGHTS[level];
      weightStyles = FONT_WEIGHT_STYLES[headingWeight];

      Component = as || getHeadingElement(level);
    } else {
      sizeStyles = TEXT_SIZES_STYLES[size];

      weightStyles = weight
        ? FONT_WEIGHT_STYLES[weight]
        : FONT_WEIGHT_STYLES.normal;

      Component = as || TYPOGRAPHY_COMPONENT_MAP[type] || "div";
    }

    const typographyComponentStyles = mc(
      typographyVariantStyles,
      sizeStyles,
      weightStyles,
      className,
    );

    return (
      <Component ref={ref} className={typographyComponentStyles} {...restProps}>
        {children}
      </Component>
    );
  },
);
