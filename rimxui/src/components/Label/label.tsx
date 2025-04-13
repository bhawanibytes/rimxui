// components/UI/label.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mc } from "@utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        destructive: "text-destructive",
        success: "text-success",
        warning: "text-warning",
        info: "text-info",
      },
      size: {
        default: "",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={mc(labelVariants({ variant, size, className }))}
        {...props}
      >
        {children}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
    );
  },
);
Label.displayName = "Label";

export { Label };
