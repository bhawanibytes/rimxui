import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

// Define types for the item object and props
interface AccordionItem {
  title: string;
  content: string | ReactNode; // Content can be either a string or JSX
}

interface AccordionProps {
  items: AccordionItem[]; // List of items with title and content
  openMultiple?: boolean; // Flag to allow multiple items to be open at once
  defaultOpenIndexes?: number[]; // Default open indexes for the accordion items
  containerClass?: string; // Custom container class
  itemClass?: string; // Custom item class
  titleClass?: string; // Custom title class
  iconClass?: string; // Custom icon class
  contentClass?: string; // Custom content class
}

export default function Accordion({
  items = [],
  openMultiple = false,
  defaultOpenIndexes = [],
  containerClass = "",
  itemClass = "",
  titleClass = "",
  iconClass = "",
  contentClass = "",
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes);

  const toggle = (index: number) => {
    if (openMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`w-full max-w-3xl mx-auto space-y-4 ${containerClass}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className={`border border-textColor-secondary dark:border-textColor-secondary rounded-xl overflow-hidden shadow-sm bg-white dark:bg-zinc-900 ${itemClass}`}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors duration-200 
              hover:bg-primary/10 dark:hover:bg-secondary/10 ${titleClass}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
            >
              <span className="font-medium text-textColor-primary dark:text-textColor-secondary">
                {item.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-200 
                ${isOpen ? "rotate-180 text-primary" : "text-textColor-primary"} ${iconClass}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    className={`px-6 py-4 text-sm text-textColor-secondary dark:text-gray-300 ${contentClass}`}
                  >
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
