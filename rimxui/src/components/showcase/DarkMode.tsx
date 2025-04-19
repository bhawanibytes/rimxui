import { CliTabs } from "../CliTabs/CliTab";
import DarkModeToggle from "../DarkMode/dark";

function DarkMode() {
  return (
    <>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/darkmode.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/darkmode.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/darkmode.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/darkmode.json",
          }}
        />
      </section>
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-white dark:bg-neutral-900 text-black dark:text-white">
        <h1 className="text-2xl font-bold">Dark Mode Toggle Test</h1>
        <DarkModeToggle variant="icon" />
        <DarkModeToggle variant="switch" />
        <DarkModeToggle variant="text" />
        <DarkModeToggle
          variant="icon"
          lightIcon="🔆" // Custom light mode icon
          darkIcon="🌑" // Custom dark mode icon
        />
      </div>
    </>
  );
}

export default DarkMode;
