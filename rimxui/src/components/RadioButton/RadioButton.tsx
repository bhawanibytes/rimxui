import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mc } from "@/utils";

// Radio Group Context
type RadioGroupContextType = {
  value: string;
  onValueChange: (value: string) => void;
  name: string;
};

const RadioGroupContext = React.createContext<RadioGroupContextType | null>(null);

function useRadioGroup() {
  const context = React.useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroupItem must be used within a RadioGroup");
  }
  return context;
}

// Radio Item Variants
const radioItemVariants = cva(
  "peer h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2",
        filled: "border-0 bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// RadioGroup Component
interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      defaultValue = "",
      value: propValue,
      onValueChange,
      disabled = false,
      name = `radio-group-${Math.random().toString(36).substring(2, 9)}`,
      required = false,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const isControlled = propValue !== undefined;
    const value = isControlled ? propValue : internalValue;

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <RadioGroupContext.Provider
        value={{
          value,
          onValueChange: handleValueChange,
          name,
        }}
      >
        <div
          ref={ref}
          className={mc("grid gap-2", className)}
          role="radiogroup"
          aria-required={required}
          data-disabled={disabled ? "" : undefined}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

// RadioGroupItem Component
interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioItemVariants> {
  id: string;
  disabled?: boolean;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  (
    { className, variant, id, value, disabled = false, ...props },
    ref
  ) => {
    const { value: groupValue, onValueChange, name } = useRadioGroup();
    const isChecked = groupValue === value;

    return (
      <input
        type="radio"
        className={mc(
          radioItemVariants({ variant, className }),
          isChecked && "relative before:content-[''] rounded before:block before:w-2 before:h-2 before:rounded-full before:bg-primary before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
        )}
        ref={ref}
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onValueChange(value as string)}
        disabled={disabled}
        {...props}
      />
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };