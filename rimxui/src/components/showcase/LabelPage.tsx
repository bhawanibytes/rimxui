import { Label } from "../Label/label.tsx";


const LabelPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <Label>Email</Label>
        <Label required>Password</Label>
        <Label variant="destructive" className="mb-2">
          Error Label
        </Label>
        <Label size="lg">Large Label</Label>
      </div>
    </div>
  );
}

export default LabelPage;