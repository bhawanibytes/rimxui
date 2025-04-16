import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const mc = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
