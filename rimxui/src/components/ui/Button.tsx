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
    sm: "text-sm px-3 py-1",
    md: "text-md px-4 py-1.5",
    lg: "text-lg px-4 py-1.5",
  };

  const iconSizeMap: Record<ButtonSizes, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variantMap: Record<ButtonVariants, string> = {
    default:
      "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800",
    secondary: "bg-blue-800 hover:bg-blue-900 text-white",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    outline:
      "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-800",
    icon: "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800",
    withIcon:
      "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800",
  };

  return (
    <button
      {...props}
      className={mc(
        "rounded-sm shadow-md shadow-gray-400 dark:shadow-gray-800 transition-all duration-300",
        variantMap[variant],
        sizeMap[size],
        variant === "withIcon"
          ? "flex flex-row items-center justify-center gap-1.5"
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
