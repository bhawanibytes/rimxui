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
    filled: "bg-primary text-white dark:bg-primary-dark dark:text-white",
    outlined: "border border-primary text-primary dark:border-primary-dark dark:text-primary",
    soft: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
  },
  secondary: {
    filled: "bg-secondary text-white dark:bg-secondary-dark dark:text-white",
    outlined: "border border-secondary text-secondary dark:border-secondary-dark dark:text-secondary",
    soft: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary"
  },
  danger: {
    filled: "bg-red-600 text-white dark:bg-red-700 dark:text-white",
    outlined: "border border-red-600 text-red-600 dark:border-red-700 dark:text-red-600",
    soft: "bg-red-100 text-red-600 dark:bg-red-200 dark:text-red-600"
  },
  gray: {
    filled: "bg-gray-600 text-white dark:bg-gray-700 dark:text-white",
    outlined: "border border-gray-600 text-gray-600 dark:border-gray-700 dark:text-gray-600",
    soft: "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
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
