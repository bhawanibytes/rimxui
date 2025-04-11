import { ListSizes, ListSpacings, ListVariants } from "@types";

export const LIST_VARIANTS_STYLES: Record<ListVariants, string> = {
  default: "text-neutral-900 dark:text-neutral-100",
  primary: "text-primary-700 dark:text-primary-300",
  secondary: "text-accent-700 dark:text-accent-300",
  outline:
    "text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-lg",
  dark: "bg-neutral-800 text-neutral-100 rounded-lg shadow-md",
  darkPrimary: "bg-primary-900 text-primary-100 rounded-lg shadow-md",
  darkSecondary: "bg-accent-900 text-accent-100 rounded-lg shadow-md",
};

export const LIST_SIZES_STYLES: Record<ListSizes, string> = {
  sm: "text-body-sm",
  md: "text-body-md",
  lg: "text-body-lg",
};

export const LIST_SPACING_STYLES: Record<ListSpacings, string> = {
  small: "space-y-2",
  medium: "space-y-3",
  large: "space-y-4",
};

export const LIST_BORDERED_STYLES = {
  enabled: "divide-y divide-neutral-200 dark:divide-neutral-700",
  disabled: "",
};
