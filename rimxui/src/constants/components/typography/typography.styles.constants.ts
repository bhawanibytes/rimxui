import {
  TypographyHeadingLevels,
  TypographySizes,
  TypographyVariants,
} from "@types";

export const TYPOGRAPHY_VARIANTS_STYLES: Record<TypographyVariants, string> = {
  default: "text-neutral-900 dark:text-neutral-100",
  primary: "text-primary-700 dark:text-primary-300",
  secondary: "text-accent-700 dark:text-accent-300",
  outline:
    "text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-lg",
  dark: "bg-neutral-800 text-neutral-100 rounded-lg shadow-md",
  darkPrimary: "bg-primary-900 text-primary-100 rounded-lg shadow-md",
  darkSecondary: "bg-accent-900 text-accent-100 rounded-lg shadow-md",
};

export const TYPOGRAPHY_SIZES_STYLES: Record<TypographySizes, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

export const HEADING_LEVEL_STYLES: Record<TypographyHeadingLevels, string> = {
  1: "text-4xl font-bold",
  2: "text-3xl font-bold",
  3: "text-2xl font-bold",
  4: "text-xl font-bold",
  5: "text-lg font-bold",
  6: "text-base font-bold",
};
