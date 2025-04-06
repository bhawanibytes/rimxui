import { HTMLAttributes } from "react";

export type ListVariants =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "dark"
  | "darkPrimary"
  | "darkSecondary";

export type ListSizes = "sm" | "md" | "lg";

export type ListSpacings = "small" | "medium" | "large";

type BaseListProps = {
  variant?: ListVariants;
  size?: ListSizes;
  spacing?: ListSpacings;
  bordered?: boolean;
  className?: string;
};

export type ListType = "unordered" | "ordered" | "plain";

export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  listType?: "unordered";
}

export interface OrderedListProps extends HTMLAttributes<HTMLOListElement> {
  listType?: "ordered";
}

export interface PlainListProps extends HTMLAttributes<HTMLDivElement> {
  listType?: "plain";
}

type ListPropsBasedOnType =
  | UnorderedListProps
  | OrderedListProps
  | PlainListProps;

export type ListProps = BaseListProps & ListPropsBasedOnType;

export type ListRefType = HTMLDivElement | HTMLUListElement | HTMLOListElement;
