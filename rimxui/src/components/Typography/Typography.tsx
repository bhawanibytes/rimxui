import { ElementType, forwardRef, CSSProperties } from "react";

import {
  DEFAULT_HEADING_WEIGHTS,
  FONT_WEIGHT_STYLES,
  HEADING_SIZE_SCALES,
  TEXT_SIZES_STYLES,
  TYPOGRAPHY_VARIANTS_STYLES,
  TYPOGRAPHY_COLOR_STYLES,
} from "@constants";
import {
  TypographyHeadingLevels,
  TypographyProps,
  TypographyRefType,
  TypographyType,
  TypographyColorNames,
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

const isPredefinedColor = (color: string): color is TypographyColorNames =>
  Object.keys(TYPOGRAPHY_COLOR_STYLES).includes(color as TypographyColorNames);

export const Typography = forwardRef<TypographyRefType, TypographyProps>(
  (
    {
      children,
      type = "text",
      variant = "default",
      color,
      size,
      weight,
      className,
      as,
      style,
      ...restProps
    },
    ref,
  ) => {
    let textColorStyles = TYPOGRAPHY_VARIANTS_STYLES[variant];
    let customStyles: CSSProperties = style || {};

    if (color) {
      if (isPredefinedColor(color)) {
        textColorStyles = TYPOGRAPHY_COLOR_STYLES[color];
      } else {
        customStyles = { ...customStyles, color };
        textColorStyles = "";
      }
    }

    let sizeStyles = "";
    let weightStyles = "";
    let Component: ElementType;

    if (type === "heading" && "level" in restProps) {
      const level = restProps.level || 1;

      const headingSizeScale = HEADING_SIZE_SCALES[level];

      sizeStyles = size ? headingSizeScale[size] : "";

      const headingWeight = weight || DEFAULT_HEADING_WEIGHTS[level];
      weightStyles = FONT_WEIGHT_STYLES[headingWeight];

      Component = as || getHeadingElement(level);
    } else {
      sizeStyles = size ? TEXT_SIZES_STYLES[size] : "";

      weightStyles = weight
        ? FONT_WEIGHT_STYLES[weight]
        : FONT_WEIGHT_STYLES.normal;

      Component = as || TYPOGRAPHY_COMPONENT_MAP[type] || "div";
    }

    const typographyComponentStyles = mc(
      textColorStyles,
      sizeStyles,
      weightStyles,
      className,
    );

    return (
      <Component
        ref={ref}
        className={typographyComponentStyles}
        style={customStyles}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
