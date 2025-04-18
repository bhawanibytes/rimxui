import { Label } from "../Label/Label";
import PreviewWrapper from "../PreviewWrapper";
import { Textarea } from "../TextArea/TextArea";

const TextAreaPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Text Area</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <div className="grid">
          <PreviewWrapper
            label="Textarea Component"
            variant="centered"
            preview={
              <div>
                <Label>Message</Label>
                <Textarea placeholder="Enter your message" />
              </div>
            }
            code={`
<div>
  <Label>Message</Label>
  <Textarea placeholder="Enter your message" />
</div>
`}
          />
          <PreviewWrapper
            label="Description Component"
            variant="centered"
            preview={
              <div>
                <Label>Description</Label>
                <Textarea
                  variant="filled"
                  size="lg"
                  placeholder="Enter your message"
                />
              </div>
            }
            code={`
<div>
  <Label>Message</Label>
  <Textarea size="lg" placeholder="Enter your message" />
</div>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default TextAreaPage;
