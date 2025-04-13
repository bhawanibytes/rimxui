import { Textarea } from '../Textarea/textarea';

const TextAreaPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        {/* // Basic textarea */}
        <Textarea placeholder="Enter your message" />
        {/* // With error state */}
        <Textarea error placeholder="Description" />
        {/* // Large filled variant */}
        <Textarea
          variant="filled"
          size="lg"
          placeholder="Long description..."
        />
        {/* // Small ghost variant without resize */}
        <Textarea
          variant="ghost"
          size="sm"
          resize="none"
          placeholder="Short note"
        />
        {/* // Horizontal-only resize */}
        <Textarea resize="horizontal" placeholder="Wide content" />
      </div>
    </div>
  );
}

export default TextAreaPage;