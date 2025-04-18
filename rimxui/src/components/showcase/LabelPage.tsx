import { Label } from "../Label/Label.tsx";

const LabelPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div>
          <Label>Email</Label>
        </div>

        <div>
          <Label required>Password</Label>
        </div>

        <div>
          <Label variant="destructive" className="mb-2">
            Error Label
          </Label>
        </div>

        <div>
          <Label size="lg">Large Label</Label>
        </div>
      </div>
    </div>
  );
};

export default LabelPage;
