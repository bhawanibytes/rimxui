// components/Toast.jsx
import { motion } from "framer-motion";

const toastVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const toastTypeStyles = {
  success: "bg-[#E6F9F3] border-[#13C296] text-[#0F766E]",
  error: "bg-[#FDEDED] border-[#F87171] text-[#B91C1C]",
  warning: "bg-[#FFFBEA] border-[#FACC15] text-[#B45309]",
  default: "bg-[#F9FAFB] border-[#D1D5DB] text-[#374151]",
};

export const Toast = ({ message, type = "default", onClose }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      className={`
        relative w-full max-w-sm flex items-center justify-between 
        gap-2 rounded-md border px-4 py-3 shadow-md
        ${toastTypeStyles[type]}
      `}
    >
      <span className="text-base font-medium">{message}</span>

      <button
        onClick={onClose}
        className="text-xl font-semibold pl-3"
        aria-label="Close"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Toast