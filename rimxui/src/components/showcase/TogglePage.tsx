import { Toggle } from "../Toggle/Toggle";

const TogglePage = () => {
  return (
    <div className="min-h-screen flex px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="flex gap-20 flex-col">
        <div className="max-w-2xl flex flex-col gap-1 mx-auto">
          <p>Default Variant</p>
          <Toggle variant="outline" aria-label="Outline toggle">
            <p>Click Me</p>
          </Toggle>
        </div>
        <div className="max-w-2xl flex flex-col gap-1 mx-auto">
          <p>Filled Variant</p>
          <Toggle aria-label="Filled toggle">
            <p>Click Me</p>
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default TogglePage;
