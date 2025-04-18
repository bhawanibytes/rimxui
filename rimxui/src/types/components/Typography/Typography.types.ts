import { HTMLAttributes, ElementType } from "react";

export type TypographyHeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type TypographyType = "heading" | "link" | "text" | "inline";
export type TypographyVariants =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "dark"
  | "darkPrimary"
  | "darkSecondary";

export type TypographySizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type TypographyWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type TypographyColorNames =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow";

type BaseTypographyProps = {
  variant?: TypographyVariants;
  size?: TypographySizes;
  weight?: TypographyWeight;
  color?: TypographyColorNames | string;
  className?: string;
  as?: ElementType;
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  type?: "heading";
  level?: TypographyHeadingLevels;
}

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  type?: "link";
  href: string;
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: "text";
}

export interface InlineProps extends HTMLAttributes<HTMLSpanElement> {
  type?: "inline";
}

type TypographyPropsBasedOnType =
  | HeadingProps
  | LinkProps
  | TextProps
  | InlineProps;

export type TypographyProps = BaseTypographyProps & TypographyPropsBasedOnType;

export type TypographyRefType =
  | HTMLHeadingElement
  | HTMLAnchorElement
  | HTMLParagraphElement
  | HTMLSpanElement;
