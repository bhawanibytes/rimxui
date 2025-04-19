import { CliTabs } from "../CliTabs/CliTab";
import DarkModeToggle from "../DarkMode/dark";
import PreviewWrapper from "../PreviewWrapper";

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
      <PreviewWrapper
        label="Dark Mode Toggle - Icon Variant"
        variant="centered"
        preview={
          <div className="min-h-auto flex  items-center justify-center bg-white dark:bg-neutral-900 text-black dark:text-white">
            <DarkModeToggle variant="icon" />
          </div>
        }
        code={`
    <div className="min-h-auto flex items-center justify-center bg-white dark:bg-neutral-900 text-black dark:text-white">
      <DarkModeToggle variant="icon" />

    </div>
  `}
      />
      <PreviewWrapper
        label="Dark Mode Toggle - Switch Variant"
        variant="centered"
        preview={<DarkModeToggle variant="switch" />}
        code={`
    <DarkModeToggle variant="switch" />
  `}
      />
      <PreviewWrapper
        label="Dark Mode Toggle - Text Variant"
        variant="centered"
        preview={<DarkModeToggle variant="text" />}
        code={`
    <DarkModeToggle variant="text" />
  `}
      />
      <PreviewWrapper
        label="Dark Mode Toggle - Icon Variant with Custom Icons"
        variant="centered"
        preview={<DarkModeToggle variant="icon" lightIcon="🔆" darkIcon="🌑" />}
        code={`
    <DarkModeToggle
      variant="icon"
      lightIcon="🔆" // Custom light mode icon
      darkIcon="🌑" // Custom dark mode icon
    />
  `}
      />
    </>
  );
}

export default DarkMode;
