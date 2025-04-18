import {
  TypographyHeadingLevels,
  TypographySizes,
  TypographyWeight,
} from "@/types";

export const TYPOGRAPHY_VARIANTS_STYLES = {
  default: "text-gray-900 dark:text-gray-100",
  primary: "text-primary-600 dark:text-primary-400",
  secondary: "text-gray-600 dark:text-gray-400",
  outline:
    "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600",
  dark: "text-gray-900 dark:text-white",
  darkPrimary: "text-primary-700 dark:text-primary-300",
  darkSecondary: "text-gray-700 dark:text-gray-300",
};

export const TEXT_SIZES_STYLES = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

export const FONT_WEIGHT_STYLES: Record<TypographyWeight, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

// Default weights for each heading level if no weight is specified
export const DEFAULT_HEADING_WEIGHTS: Record<
  TypographyHeadingLevels,
  TypographyWeight
> = {
  1: "bold",
  2: "bold",
  3: "semibold",
  4: "semibold",
  5: "medium",
  6: "medium",
};

// Size scales without font weights (weights will be applied separately)
export const HEADING_SIZE_SCALES: Record<
  TypographyHeadingLevels,
  Record<TypographySizes, string>
> = {
  1: {
    xs: "text-lg",
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
    "3xl": "text-6xl",
    "4xl": "text-7xl",
  },
  2: {
    xs: "text-base",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
    "3xl": "text-5xl",
    "4xl": "text-6xl",
  },
  3: {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
    "3xl": "text-4xl",
    "4xl": "text-5xl",
  },
  4: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  },
  5: {
    xs: "text-xs",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
    "2xl": "text-xl",
    "3xl": "text-2xl",
    "4xl": "text-3xl",
  },
  6: {
    xs: "text-xs",
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-base",
    "2xl": "text-lg",
    "3xl": "text-xl",
    "4xl": "text-2xl",
  },
};
