export const LISTITEM_PADDING_STYLES = {
  enabled: "py-2.5",
  disabled: "",
};

export const LISTITEM_GUTTERS_STYLES = {
  enabled: "px-4",
  disabled: "",
};

export const LISTITEM_DIVIDER_STYLES = {
  enabled: "border-b border-neutral-200 dark:border-neutral-700",
  disabled: "",
};

export const LISTITEM_SELECTED_STYLES = {
  enabled: "bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-100",
  disabled: "",
};

export const LISTITEM_HOVER_STYLES = {
  default:
    "transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
  primary:
    "transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/30",
  secondary:
    "transition-colors duration-200 hover:bg-accent-50 dark:hover:bg-accent-900/30",
  outline:
    "transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
  dark: "transition-colors duration-200 hover:bg-neutral-700/50",
  darkPrimary: "transition-colors duration-200 hover:bg-primary-800/50",
  darkSecondary: "transition-colors duration-200 hover:bg-accent-800/50",
};

export const LISTITEM_HOVER_STYLES_DEFAULT = LISTITEM_HOVER_STYLES.default;
