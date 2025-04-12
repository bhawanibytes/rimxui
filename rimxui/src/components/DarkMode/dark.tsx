import { useEffect, useState } from "react";

interface DarkModeToggleProps {
  variant?: "icon" | "switch" | "text"; // Define the variant types
  lightIcon?: string;
  darkIcon?: string;
  className?: string;
  remember?: boolean;
  onToggle?: (isDark: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  variant = "icon", // Default to "icon"
  lightIcon = "🌞",
  darkIcon = "🌙",
  className = "",
  remember = true,
  onToggle,
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return (
        (remember && localStorage.theme === "dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      if (remember) localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      if (remember) localStorage.setItem("theme", "light");
    }
    onToggle?.(isDark);
  }, [isDark, remember, onToggle]);

  const toggle = () => setIsDark((prev) => !prev);

  const renderContent = () => {
    if (variant === "switch") {
      return (
        <div className="relative w-14 h-8 rounded-full bg-neutral-300 dark:bg-neutral-600 transition-colors group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500">
          <div
            className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md transform transition-transform ${
              isDark ? "translate-x-6" : ""
            }`}
          />
        </div>
      );
    }

    if (variant === "text") {
      return (
        <span className="px-4 py-1 border border-neutral-500 dark:border-neutral-400 rounded-md text-neutral-700 dark:text-neutral-200 transition-colors duration-200 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white">
          {isDark ? "Light" : "Dark"}
        </span>
      );
    }

    // Default: icon
    return (
      <span className="text-yellow-500 dark:text-gray-200 transition-transform group-hover:scale-125 duration-200">
        {isDark ? lightIcon : darkIcon}
      </span>
    );
  };

  return (
    <button
      onClick={toggle}
      className={`group flex items-center justify-center p-2 rounded-full transition duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:scale-95 ${className}`}
      aria-label="Toggle Dark Mode"
    >
      {renderContent()}
    </button>
  );
};

export default DarkModeToggle;
