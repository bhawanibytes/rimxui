// components/UI/textarea.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mc } from "@utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-input",
        ghost: "border-0 bg-transparent shadow-none",
        filled: "bg-muted border-0 hover:bg-muted/80",
      },
      size: {
        default: "min-h-[80px]",
        sm: "min-h-[60px] text-xs",
        lg: "min-h-[100px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, error, resize = "vertical", ...props }, ref) => {
    return (
      <textarea
        className={mc(
          textareaVariants({ variant, size, className }),
          error && "border-destructive focus-visible:ring-destructive/30",
          {
            "resize-none": resize === "none",
            "resize-y": resize === "vertical",
            "resize-x": resize === "horizontal",
            resize: resize === "both",
          },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
