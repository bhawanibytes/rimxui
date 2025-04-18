import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mc } from "@utils";
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={mc(toggleVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

Toggle.displayName = "Toggle";

export { Toggle };