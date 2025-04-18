import PreviewWrapper from "../PreviewWrapper";
import { Toggle } from "../Toggle/Toggle";

const TogglePage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Toggle</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <div className="grid gap-6">
          <PreviewWrapper
            label="Toggle Component"
            variant="centered"
            preview={
              <Toggle variant="outline" aria-label="Outline toggle">
                <p>Click Me</p>
              </Toggle>
            }
            code={`
<Toggle variant="outline" aria-label="Outline toggle">
      <p>Click Me</p>
</Toggle>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default TogglePage;
