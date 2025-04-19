import { useToast } from "../Toasts/toast";
import PreviewWrapper from "../PreviewWrapper";
import { CliTabs } from "../CliTabs/CliTab";

export const ToastPage = () => {
  const showToast = useToast();
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium">
          <span>Components</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span>Toast</span>
        </div>
        <h1 className="text-h1 text-neutral-900 dark:text-neutral-100">
          Toasts
        </h1>
        <p className="text-body-lg text-neutral-500 dark:text-neutral-400">
          A versatile toast component for displaying brief notifications with
          customizable styles and animations.
        </p>
      </div>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
          }}
        />
      </section>
      <PreviewWrapper
        label="Success Toast"
        variant="centered"
        preview={
          <button
            onClick={() => showToast("this is a success toast !", "success")}
          >
            Success Toast
          </button>
        }
        code={`
                    import { useToast } from "@/components/Toasts/toast"
                    const showToast = useToast();

                    <button
          onClick={() => showToast("this is a success toast !", "success")}
        >
          Success Toast
        </button>`}
      />

      <PreviewWrapper
        label="Error Toast"
        variant="centered"
        preview={
          <button onClick={() => showToast("this is a error toast !", "error")}>
            Error Toast
          </button>
        }
        code={`
                    import { useToast } from "@/components/Toasts/toast"
                    const showToast = useToast();

                    <button
                        onClick={() => showToast("this is a error toast !", "error")}
                    >
                        Error Toast
                    </button>`}
      />
      <PreviewWrapper
        label="Info Toast"
        variant="centered"
        preview={
          <button onClick={() => showToast("this is a info toast !", "info")}>
            Info Toast
          </button>
        }
        code={`
                    import { useToast } from "@/components/Toasts/toast"
                    const showToast = useToast();

                    <button
          onClick={() => showToast("this is a info toast !", "info")}
        >
          Info Toast
        </button>`}
      />
      <PreviewWrapper
        label="Warning Toast"
        variant="centered"
        preview={
          <button
            onClick={() => showToast("this is a warning toast !", "warning")}
          >
            Warning Toast
          </button>
        }
        code={`
                    import { useToast } from "@/components/Toasts/toast"
                    const showToast = useToast();

                    <button
          onClick={() => showToast("this is a warning toast !", "warning")}
        >
          Warning Toast
        </button>`}
      />
    </div>
  );
};
