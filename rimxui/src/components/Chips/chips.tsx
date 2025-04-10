// components/Chip.jsx
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const chipColors = {
  primary: {
    filled: "bg-primary text-white",
    outlined: "border border-primary text-primary",
    soft: "bg-primary/10 text-primary"
  },
  secondary: {
    filled: "bg-secondary text-white",
    outlined: "border border-secondary text-secondary",
    soft: "bg-secondary/10 text-secondary"
  },
  danger: {
    filled: "bg-red-600 text-white",
    outlined: "border border-red-600 text-red-600",
    soft: "bg-red-100 text-red-600"
  },
  gray: {
    filled: "bg-gray-600 text-white",
    outlined: "border border-gray-600 text-gray-600",
    soft: "bg-gray-200 text-gray-800"
  }
};

const Chip = ({
  children,
  variant = "soft", // 'filled', 'outlined', 'soft'
  color = "gray",   // 'primary', 'secondary', 'danger', 'gray'
  dismissable = false,
  onDismiss,
  className = ""
}) => {
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
