import { ElementType, forwardRef } from "react";

import {
  LIST_BORDERED_STYLES,
  LIST_SIZES_STYLES,
  LIST_SPACING_STYLES,
  LIST_VARIANTS_STYLES,
} from "@constants";
import { ListContext } from "@contexts";
import {
  ListProps,
  ListRefType,
  ListType,
  OrderedListProps,
  PlainListProps,
  UnorderedListProps,
} from "@types";
import { mc } from "@utils";

const LIST_COMPONENT_MAP: Record<ListType, ElementType> = {
  unordered: forwardRef<HTMLUListElement, UnorderedListProps>(
    ({ children, ...props }, ref) => (
      <ul ref={ref} {...props}>
        {children}
      </ul>
    ),
  ),
  ordered: forwardRef<HTMLOListElement, OrderedListProps>(
    ({ children, ...props }, ref) => (
      <ol ref={ref} {...props}>
        {children}
      </ol>
    ),
  ),
  plain: forwardRef<HTMLDivElement, PlainListProps>(
    ({ children, ...props }, ref) => (
      <div ref={ref} role="list" {...props}>
        {children}
      </div>
    ),
  ),
};

export const List = forwardRef<ListRefType, ListProps>(
  (
    {
      children,
      listType = "unordered",
      bordered = false,
      size = "md",
      spacing = "medium",
      variant = "default",
      className,
      "aria-label": ariaLabel,
      ...restProps
    },
    ref,
  ) => {
    const listVariantStyles = LIST_VARIANTS_STYLES[variant];
    const listSizeStyles = LIST_SIZES_STYLES[size];
    const listSpacingStyles = LIST_SPACING_STYLES[spacing];

    const isDarkVariant = variant.startsWith("dark");

    const borderedStyles = !bordered
      ? LIST_BORDERED_STYLES.disabled
      : isDarkVariant
        ? LIST_BORDERED_STYLES.dark
        : LIST_BORDERED_STYLES.enabled;

    const listComponentStyles = mc(
      listVariantStyles,
      listSizeStyles,
      listSpacingStyles,
      borderedStyles,
      isDarkVariant ? "text-white" : "",
      className,
    );

    const ListComponent = LIST_COMPONENT_MAP[listType];

    const contextValue = {
      variant,
      size,
      spacing,
      bordered,
      isDarkVariant,
    };

    const accessibilityProps = {
      "aria-label": ariaLabel || `${variant} list`,
    };

    return (
      <ListContext.Provider value={contextValue}>
        <ListComponent
          ref={ref}
          className={listComponentStyles}
          {...accessibilityProps}
          {...restProps}
        >
          {children}
        </ListComponent>
      </ListContext.Provider>
    );
  },
);
