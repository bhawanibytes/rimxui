import { Optional } from "@types";

export const mc = (...classes: Array<Optional<string>>) => {
  return classes.filter(Boolean).join(" ");
};
