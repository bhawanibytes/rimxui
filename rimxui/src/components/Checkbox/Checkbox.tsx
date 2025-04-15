import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mc } from "@utils";

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2",
        filled: "border-0 bg-muted",
      },
      colorScheme: {
        // Changed from 'color' to 'colorScheme'
        primary: "text-primary border-primary focus-visible:ring-primary",
        secondary:
          "text-secondary border-secondary focus-visible:ring-secondary",
        destructive:
          "text-destructive border-destructive focus-visible:ring-destructive",
        success: "text-success border-success focus-visible:ring-success",
      },
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      colorScheme: "primary", // Updated from 'color'
      size: "default",
    },
  },
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">, // Added 'color' to Omit
    VariantProps<typeof checkboxVariants> {
  label?: string;
  labelPosition?: "left" | "right";
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant,
      colorScheme,
      size,
      label,
      labelPosition = "right",
      indeterminate,
      ...props
    },
    ref,
  ) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        {label && labelPosition === "left" && (
          <span className="text-sm font-medium text-foreground">{label}</span>
        )}
        <input
          type="checkbox"
          ref={ref}
          className={mc(
            checkboxVariants({ variant, colorScheme, size, className }), // Updated to colorScheme
            indeterminate && "bg-primary/20 border-primary/50",
          )}
          {...props}
        />
        {label && labelPosition === "right" && (
          <span className="text-sm font-medium text-foreground">{label}</span>
        )}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
