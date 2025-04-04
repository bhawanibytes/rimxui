import { HTMLAttributes, ReactNode } from "react";

import { PropsWithRequiredChildren } from "../../react.types";

export type ListItemType = "plain" | "list-item";

interface ListItemBaseProps extends PropsWithRequiredChildren {
  className?: string;
  itemType?: ListItemType;
  disablePadding?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  secondaryAction?: ReactNode;
  selected?: boolean;
}

export interface ListItemTypeListItemProps
  extends HTMLAttributes<HTMLLIElement> {
  itemType?: "list-item";
}

export interface ListItemTypePlainProps extends HTMLAttributes<HTMLDivElement> {
  itemType?: "plain";
}

type ListItemTypeBasedProps =
  | ListItemTypeListItemProps
  | ListItemTypePlainProps;

export type ListItemProps = ListItemBaseProps & ListItemTypeBasedProps;
export type ListItemRefType = HTMLDivElement | HTMLLIElement;
