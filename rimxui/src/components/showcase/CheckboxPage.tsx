import { Checkbox } from "../Checkbox/Checkbox";
import { Label } from "../Label/Label";

const CheckboxPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-row items-center gap-2 mx-auto">
        <Checkbox />
        <Label>Email</Label>
      </div>
    </div>
  );
};

export default CheckboxPage;
