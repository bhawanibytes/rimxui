import { Label } from "../Label/Label";
import { Textarea } from "../TextArea/TextArea";

const TextAreaPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        {/* // Basic textarea */}
        <div>
        <Label>Message</Label>
        <Textarea placeholder="Enter your message" />
        </div>
        {/* // With error state */}
        <div>
        <Label>Description: </Label>
        <Textarea error placeholder="Description" />
        </div>
        {/* // Large filled variant */}
        <div>
        <Label>Long Description</Label>
        <Textarea
          variant="filled"
          size="lg"
          placeholder="Long description..."
        />
        </div>
        {/* // Small ghost variant without resize */}
        <div>
        <Label>Add Comments</Label>
        <Textarea
          variant="ghost"
          size="sm"
          resize="none"
          placeholder="Short note"
        />
        </div>
        {/* // Horizontal-only resize */}
        <div>
        <Label>Wide Content</Label>
        <Textarea resize="horizontal" placeholder="Wide content" />
        </div>
      </div>
    </div>
  );
};

export default TextAreaPage;
