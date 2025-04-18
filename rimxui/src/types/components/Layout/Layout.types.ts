import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface BaseLayoutProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

export type SpacingValue =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"
  | "auto"
  | "px"
  | "full"
  | "screen"
  | "svh"
  | "lvh"
  | "dvh"
  | "min"
  | "max"
  | "fit";

export type ArbitraryValue<T> = T | `[${string}]`;

export interface SpacingProps {
  m?: ArbitraryValue<SpacingValue>;
  mx?: ArbitraryValue<SpacingValue>;
  my?: ArbitraryValue<SpacingValue>;
  mt?: ArbitraryValue<SpacingValue>;
  mb?: ArbitraryValue<SpacingValue>;
  ml?: ArbitraryValue<SpacingValue>;
  mr?: ArbitraryValue<SpacingValue>;
  p?: ArbitraryValue<SpacingValue>;
  px?: ArbitraryValue<SpacingValue>;
  py?: ArbitraryValue<SpacingValue>;
  pt?: ArbitraryValue<SpacingValue>;
  pb?: ArbitraryValue<SpacingValue>;
  pl?: ArbitraryValue<SpacingValue>;
  pr?: ArbitraryValue<SpacingValue>;
}

export type ColorVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "white"
  | "black"
  | "transparent";

export interface AppearanceProps {
  bg?: ColorVariant | string;
  color?: ColorVariant | string;
  borderColor?: ColorVariant | string;
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  border?: "0" | "1" | "2" | "4" | "8";
}

export interface SizeProps {
  width?: ArbitraryValue<SpacingValue>;
  height?: ArbitraryValue<SpacingValue>;
  minW?: ArbitraryValue<SpacingValue>;
  maxW?: ArbitraryValue<SpacingValue>;
  minH?: ArbitraryValue<SpacingValue>;
  maxH?: ArbitraryValue<SpacingValue>;
}

export interface FlexProps
  extends BaseLayoutProps,
    SpacingProps,
    AppearanceProps,
    SizeProps {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  gap?: ArbitraryValue<SpacingValue>;
  grow?: "0" | "1" | `[${string}]`;
  shrink?: "0" | "1" | `[${string}]`;
}

export interface BoxProps
  extends BaseLayoutProps,
    SpacingProps,
    AppearanceProps,
    SizeProps {
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "grid"
    | "inline-grid"
    | "hidden";
  overflow?: "auto" | "hidden" | "visible" | "scroll";
  overflowX?: "auto" | "hidden" | "visible" | "scroll";
  overflowY?: "auto" | "hidden" | "visible" | "scroll";
}

export interface GridProps
  extends BaseLayoutProps,
    SpacingProps,
    AppearanceProps,
    SizeProps {
  cols?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "none"
    | `[${string}]`;
  rows?: string;
  flow?: "row" | "col" | "row-dense" | "col-dense";
  autoRows?: string;
  autoCols?: string;
  gap?: ArbitraryValue<SpacingValue>;
  columnGap?: ArbitraryValue<SpacingValue>;
  rowGap?: ArbitraryValue<SpacingValue>;
  placeItems?: "start" | "end" | "center" | "stretch";
  placeContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "between"
    | "around"
    | "evenly";
}

export interface StackProps extends Omit<FlexProps, "direction"> {
  spacing?: ArbitraryValue<SpacingValue>;
}

export interface RowProps extends Omit<FlexProps, "direction"> {
  spacing?: ArbitraryValue<SpacingValue>;
}
