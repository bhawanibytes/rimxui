import { ElementType, forwardRef, HTMLAttributes } from "react";

import {
  LISTITEM_DIVIDER_STYLES,
  LISTITEM_GUTTERS_STYLES,
  LISTITEM_HOVER_STYLES,
  LISTITEM_HOVER_STYLES_DEFAULT,
  LISTITEM_PADDING_STYLES,
  LISTITEM_SELECTED_STYLES,
} from "@constants";
import { useListContext } from "@contexts/list";
import { ListItemProps, ListItemRefType, ListItemType } from "@types";
import { mc } from "@utils";

const LISTITEM_COMPONENT_MAP: Record<ListItemType, ElementType> = {
  "list-item": forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
    ({ children, ...props }, ref) => (
      <li ref={ref} {...props}>
        {children}
      </li>
    ),
  ),
  plain: forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ children, ...props }, ref) => (
      <div ref={ref} {...props}>
        {children}
      </div>
    ),
  ),
};

export const ListItem = forwardRef<ListItemRefType, ListItemProps>(
  (
    {
      children,
      className,
      itemType = "list-item",
      disablePadding = false,
      disableGutters = false,
      divider = false,
      secondaryAction,
      selected = false,
      ...props
    },
    ref,
  ) => {
    let hoverStyles = LISTITEM_HOVER_STYLES_DEFAULT;
    const listContext = useListContext();

    // TODO: Remove error from context or handle this after finalizing behavior
    if (listContext && listContext.variant) {
      const variantKey =
        listContext.variant as keyof typeof LISTITEM_HOVER_STYLES;
      hoverStyles =
        LISTITEM_HOVER_STYLES[variantKey] || LISTITEM_HOVER_STYLES_DEFAULT;
    }

    const paddingStyles = disablePadding
      ? LISTITEM_PADDING_STYLES.disabled
      : LISTITEM_PADDING_STYLES.enabled;

    const guttersStyles = disableGutters
      ? LISTITEM_GUTTERS_STYLES.disabled
      : LISTITEM_GUTTERS_STYLES.enabled;

    const dividerStyles = divider
      ? LISTITEM_DIVIDER_STYLES.enabled
      : LISTITEM_DIVIDER_STYLES.disabled;

    const selectedStyles = selected
      ? LISTITEM_SELECTED_STYLES.enabled
      : LISTITEM_SELECTED_STYLES.disabled;

    const listItemClasses = mc(
      "flex w-full items-center",
      paddingStyles,
      guttersStyles,
      dividerStyles,
      selectedStyles,
      hoverStyles,
      className,
    );

    const ItemComponent = LISTITEM_COMPONENT_MAP[itemType];

    return (
      <ItemComponent ref={ref} className={listItemClasses} {...props}>
        {children}
        {secondaryAction && (
          <div className="ml-auto flex items-center">{secondaryAction}</div>
        )}
      </ItemComponent>
    );
  },
);
