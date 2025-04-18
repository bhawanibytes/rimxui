import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MorphingButtonProps {
  initialLabel: string;
  morphedLabel: string;
  initialIcon?: React.ElementType;
  morphedIcon?: React.ElementType;
  initialContent?: React.ReactNode;
  morphedContent?: React.ReactNode;
  duration?: number;
  onClick?: () => void;
  onMorphStart?: () => void;
  onMorphEnd?: () => void;
  className?: string;
  width?: string;
  height?: string;
  padding?: string;
  iconSize?: number;
  transitionDuration?: number;
  morphOnClick?: boolean;
  forceMorph?: boolean;
  disabled?: boolean;
  initialBgColor?: string;
  morphedBgColor?: string;
  initialTextColor?: string;
  morphedTextColor?: string;
  disableTapEffect?: boolean;
  resetAfter?: number;
}

const MorphingButton: React.FC<MorphingButtonProps> = ({
  initialLabel,
  morphedLabel,
  initialIcon: InitialIcon,
  morphedIcon: MorphedIcon,
  initialContent,
  morphedContent,
  duration,
  onClick,
  onMorphStart,
  onMorphEnd,
  className = "",
  width = "w-40",
  height = "h-12",
  padding = "px-4 py-3",
  iconSize = 18,
  transitionDuration = 0.3,
  morphOnClick = true,
  forceMorph = false,
  disabled = false,
  initialBgColor = "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
  morphedBgColor = "bg-green-500 hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500",
  initialTextColor = "text-white",
  morphedTextColor = "text-white",
  disableTapEffect = false,
  resetAfter,
}) => {
  const [morphed, setMorphed] = useState(false);
  const [cooldown, setCooldown] = useState(false); 

  useEffect(() => {
    if (forceMorph) {
      setMorphed(true);
      onMorphStart?.();
    } else if (!morphOnClick) {
      setMorphed(false);
    }
  }, [forceMorph]);

  useEffect(() => {
    if (resetAfter && morphed) {
      setCooldown(true); 
      const timer = setTimeout(() => {
        setMorphed(false);
        onMorphEnd?.();
        setCooldown(false); 
      }, resetAfter);
      return () => clearTimeout(timer);
    }
  }, [morphed, resetAfter, onMorphEnd]);

  const handleClick = () => {
    if (disabled || cooldown) return; 
    onClick?.();

    if (!morphOnClick) return;

    const willMorph = !morphed;
    setMorphed(willMorph);

    if (willMorph) {
      onMorphStart?.();
    } else {
      onMorphEnd?.();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={!disableTapEffect ? { scale: 0.95 } : {}}
      disabled={disabled || cooldown}
      className={`relative flex justify-center items-center gap-2 rounded-full font-medium overflow-hidden transition-colors duration-300
        ${width} ${height} ${padding}
        ${morphed ? morphedBgColor : initialBgColor}
        ${morphed ? morphedTextColor : initialTextColor}
        ${(disabled || cooldown) ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={morphed ? "morphed" : "initial"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: transitionDuration }}
          className="flex items-center gap-2"
        >
          {morphed ? (
            <>
              {morphedContent && <span style={{ fontSize: iconSize }}>{morphedContent}</span>}
              {!morphedContent && MorphedIcon && <MorphedIcon size={iconSize} />}
              {morphedLabel}
            </>
          ) : (
            <>
              {initialContent && <span style={{ fontSize: iconSize }}>{initialContent}</span>}
              {!initialContent && InitialIcon && <InitialIcon size={iconSize} />}
              {initialLabel}
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default MorphingButton;
