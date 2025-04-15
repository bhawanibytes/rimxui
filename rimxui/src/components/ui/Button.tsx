import { FC } from "react";
import { mc } from "@utils";
import { DynamicIcon } from "lucide-react/dynamic";
import { ButtonProps, ButtonSizes, ButtonVariants } from "@types";

const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  label = "Button",
  className,
  icon = "home",
  ...props
}) => {
  const sizeMap: Record<ButtonSizes, string> = {
    sm: "text-body-sm px-3 py-1.5",
    md: "text-body-md px-4 py-2",
    lg: "text-body-lg px-5 py-2.5",
  };

  const iconSizeMap: Record<ButtonSizes, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variantMap: Record<ButtonVariants, string> = {
    default:
      "bg-primary-500 hover:bg-primary-600 text-white dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white",
    secondary: "bg-accent-500 hover:bg-accent-600 text-white",
    destructive: "bg-error-500 hover:bg-error-600 text-white",
    outline:
      "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white",
    icon: "bg-primary-500 hover:bg-primary-600 text-white dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white",
    withIcon:
      "bg-primary-500 hover:bg-primary-600 text-white dark:bg-primary-400 dark:hover:bg-primary-500 dark:text-white",
  };

  return (
    <button
      {...props}
      className={mc(
        "rounded-md shadow-md shadow-neutral-200 dark:shadow-neutral-800 transition-all duration-300",
        variantMap[variant],
        sizeMap[size],
        variant === "withIcon"
          ? "flex flex-row items-center justify-center gap-2"
          : "",
        className,
      )}
    >
      {variant === "withIcon" && (
        <DynamicIcon
          name={icon}
          strokeWidth={1.5}
          className={mc(iconSizeMap[size])}
        />
      )}
      {variant === "icon" ? (
        <DynamicIcon
          name={icon}
          strokeWidth={1.5}
          className={mc(iconSizeMap[size])}
        />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
