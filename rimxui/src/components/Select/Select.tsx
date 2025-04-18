import * as React from "react";
import { mc } from "@/utils";
import { Check, ChevronDown } from "lucide-react";

// Context to share state between Select components
const SelectContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  className?:string;
} | null>(null);

// Hook to consume the Select context
const useSelectContext = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within a Select component");
  }
  return context;
};

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ children, value, defaultValue, onValueChange, name }, ref) => {
    
    const [open, setOpen] = React.useState(false);

    const [internalValue, setInternalValue] = React.useState(
      value || defaultValue || "",
    );

    // Update internal value when controlled value changes
    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
        setOpen(false);
      },
      [value, onValueChange],
    );

    return (
      <SelectContext.Provider
        value={{
          value: internalValue,
          onValueChange: handleValueChange,
          open,
          setOpen,
          name,
          
        }}
      >
        <div ref={ref} className="relative">
          {children}
        </div>
      </SelectContext.Provider>
    );
  },
);

Select.displayName = "Select";

interface SelectTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { open, setOpen } = useSelectContext();
    
    return (
      <button
        ref={ref}
        type="button"
        role="combobox"
        aria-expanded={open}
        className={mc(
          "flex h-10 items-center justify-between rounded-md border border-gray-200 px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus:ring-gray-300",
          className,
        )}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    );
  },
);

SelectTrigger.displayName = "SelectTrigger";

interface SelectValueProps {
  placeholder?: string;
  className?: string;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ placeholder, className }, ref) => {
    const { value } = useSelectContext();

    return (
      <span ref={ref} className={mc("block truncate", className)}>
        {value ? value : placeholder}
      </span>
    );
  },
);

SelectValue.displayName = "SelectValue";

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ children, className }, ref) => {
    const { open } = useSelectContext();

    if (!open) return null;

    return (
      <div
        ref={ref}
        className={mc(
          "absolute z-50 w-[180px] overflow-hidden rounded-md border border-gray-200 text-gray-950 shadow-md animate-in fade-in-80 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
          "mt-1",
          className,
        )}
      >
        <div>{children}</div>
      </div>
    );
  },
);

SelectContent.displayName = "SelectContent";

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value: itemValue, children, className, ...props }, ref) => {
    const { value, onValueChange } = useSelectContext();
    const selected = value === itemValue;

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={selected}
        data-value={itemValue}
        data-selected={selected}
        className={mc(
          "relative cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800",
          className,
        )}
        onClick={() => onValueChange(itemValue)}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {selected && <Check className="h-4 w-4" />}
        </span>
        <span className="text-sm">{children}</span>
      </div>
    );
  },
);

SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
