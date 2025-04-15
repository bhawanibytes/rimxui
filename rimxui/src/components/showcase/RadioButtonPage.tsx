import { RadioGroup, RadioGroupItem } from "@/components/RadioButton/RadioButton";
import { Label } from "@/components/Label/Label";
const RadioButtonPage = () => {
  return (
    <div className="min-h-screen flex px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="flex gap-20 flex-col">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem variant={"default"} value="option-one" id="option-one" />
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
    </div>
  );
};

export default RadioButtonPage;
