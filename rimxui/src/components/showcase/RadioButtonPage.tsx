import { RadioGroup, RadioGroupItem } from "@/components/RadioButton/RadioButton";
import { Label } from "@/components/Label/Label";
import PreviewWrapper from "../PreviewWrapper";
const RadioButtonPage = () => {
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
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      variant={"default"}
                      value="option-one"
                      id="option-one"
                    />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      variant={"default"}
                      value="option-two"
                      id="option-two"
                    />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
              </div>
            }
            code={`
<div>
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        variant={"default"}
        value="option-one"
        id="option-one"
      />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        variant={"default"}
          value="option-two"
          id="option-two"
      />
    <Label htmlFor="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</div>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioButtonPage;
