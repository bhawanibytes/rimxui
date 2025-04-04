import { ListSizes, ListSpacings, ListVariants } from "@types";

export const LIST_VARIANTS_STYLES: Record<ListVariants, string> = {
  default: "text-gray-800 dark:text-gray-100",
  primary: "text-blue-700 dark:text-blue-300",
  secondary: "text-purple-700 dark:text-purple-300",
  outline:
    "text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-md",
};

export const LIST_SIZES_STYLES: Record<ListSizes, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const LIST_SPACING_STYLES: Record<ListSpacings, string> = {
  small: "space-y-1",
  medium: "space-y-2",
  large: "space-y-4",
};

export const LIST_BORDERED_STYLES = {
  enabled: "divide-y divide-gray-200 dark:divide-gray-700",
  disabled: "",
};
