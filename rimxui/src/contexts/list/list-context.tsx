import { createContext } from "react";
import { ListSizes, ListSpacings, ListVariants, Nullable } from "@types";

export interface ListContextProps {
  variant: ListVariants;
  size: ListSizes;
  spacing: ListSpacings;
  bordered: boolean;
  isDarkVariant?: boolean;
}

export const ListContext = createContext<Nullable<ListContextProps>>(null);
