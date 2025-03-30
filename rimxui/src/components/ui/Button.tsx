import { FC } from "react";
import { mc } from "../../utils/utils";
import { Home } from "lucide-react";

interface ButtonProps {
  variant?:
    | "Primary"
    | "Secondary"
    | "Destructive"
    | "Outline"
    | "Icon"
    | "WithIcon";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "Primary",
  size = "md",
  label = "Button",
  className,
  ...props
}) => {
  const sizeMap: Record<string, string> = {
    sm: "text-sm px-3 py-1",
    md: "text-md px-4 py-1.5",
    lg: "text-lg px-4 py-1.5",
  };

  const iconSizeMap: Record<string, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variantMap: Record<string, string> = {
    Primary:
      "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800",
    Secondary: "bg-blue-800 hover:bg-blue-900 text-white",
    Destructive: "bg-red-600 hover:bg-red-700 text-white",
    Outline:
      "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-800",
    Icon: "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800",
    WithIcon:
      "bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800",
  };

  return (
    <button
      {...props}
      className={mc(
        "rounded-sm shadow-md shadow-gray-400 dark:shadow-gray-800 transition-all duration-300",
        variantMap[variant],
        sizeMap[size],
        variant === "WithIcon"
          ? "flex flex-row items-center justify-center gap-1.5"
          : "",
        className,
      )}
    >
      {variant === "WithIcon" && (
        <Home strokeWidth={1.5} className={mc(iconSizeMap[size])} />
      )}
      {variant === "Icon" ? (
        <Home strokeWidth={1.5} className={mc(iconSizeMap[size])} />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
