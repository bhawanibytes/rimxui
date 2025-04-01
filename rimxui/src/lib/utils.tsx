import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
