import DarkModeToggle from "../DarkMode/dark";

function DarkMode() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-2xl font-bold">Dark Mode Toggle Test</h1>
      <DarkModeToggle variant="icon" />
      <DarkModeToggle variant="switch" />
      <DarkModeToggle variant="text" />
      <DarkModeToggle
  variant="icon"
  lightIcon="🔆"   // Custom light mode icon
  darkIcon="🌑"    // Custom dark mode icon
/>
    </div>
  );
}

export default DarkMode;