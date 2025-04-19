import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

// Define types for the component props
type ChipVariant = "filled" | "outlined" | "soft";
type ChipColor = "primary" | "secondary" | "danger" | "gray";

interface ChipProps {
  children: React.ReactNode; // The content inside the chip
  variant?: ChipVariant; // The variant of the chip (filled, outlined, soft)
  color?: ChipColor; // The color of the chip (primary, secondary, danger, gray)
  dismissable?: boolean; // Flag to make the chip dismissable
  onDismiss?: () => void; // Callback function to handle dismissal
  className?: string; // Additional classes for customization
}

const chipColors: Record<ChipColor, Record<ChipVariant, string>> = {
  primary: {
    filled:
      "bg-blue-600 text-white dark:bg-blue-500 dark:text-white",
    outlined:
      "border border-blue-600 text-blue-600 dark:border-blue-300 dark:text-blue-300",
    soft:
      "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200"
  },
  secondary: {
    filled:
      "bg-purple-600 text-white dark:bg-purple-500 dark:text-white",
    outlined:
      "border border-purple-600 text-purple-600 dark:border-purple-300 dark:text-purple-300",
    soft:
      "bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-200"
  },
  danger: {
    filled:
      "bg-red-600 text-white dark:bg-red-500 dark:text-white",
    outlined:
      "border border-red-600 text-red-600 dark:border-red-300 dark:text-red-300",
    soft:
      "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200"
  },
  gray: {
    filled:
      "bg-neutral-600 text-white dark:bg-neutral-400 dark:text-neutral-900",
    outlined:
      "border border-neutral-600 text-neutral-700 dark:border-neutral-400 dark:text-neutral-300",
    soft:
      "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
  }
};



const Chip = ({
  children,
  variant = "soft",
  color = "gray",
  dismissable = false,
  onDismiss,
  className = ""
}: ChipProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={clsx(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
          chipColors[color]?.[variant],
          className
        )}
      >
        <span>{children}</span>

        {dismissable && (
          <button
            onClick={onDismiss}
            className="ml-1 hover:opacity-70 transition"
            aria-label="Dismiss chip"
          >
            <X size={14} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Chip;
