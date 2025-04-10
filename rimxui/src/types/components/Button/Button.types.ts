import { IconName } from "lucide-react/dynamic";

export type ButtonVariants =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "icon"
  | "withIcon";

export type ButtonSizes = "sm" | "md" | "lg";

type BaseButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  label?: string;
  icon?: IconName;
};

export type ButtonProps = BaseButtonProps;
