import { useContext } from "react";
import { ListContext } from "./list-context";

export const useListContext = () => useContext(ListContext);
