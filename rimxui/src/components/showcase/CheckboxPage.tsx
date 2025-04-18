import { Checkbox } from "../Checkbox/Checkbox";
import { Label } from "../Label/Label";
import PreviewWrapper from "../PreviewWrapper";

const CheckboxPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Checkbox</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <div className="grid gap-6">
          <PreviewWrapper
            label="Checkbox Input"
            variant="centered"
            preview={
              <form>
                <div className="flex justify-center items-center gap-2">
                  <Checkbox />
                  <Label>terms and conditions</Label>
                </div>
              </form>
            }
            code={`
<form>
  <div className="flex justify-center items-center gap-2">
    <Checkbox />
    <Label>terms and conditions</Label>
  </div>
</form>
`}
          />
        </div>
        <div className="grid gap-6">
          <PreviewWrapper
            label="Checkbox disable"
            variant="centered"
            preview={
              <form>
                <div className="flex justify-center items-center gap-2">
                  <Checkbox disabled />
                  <Label>terms and conditions</Label>
                </div>
              </form>
            }
            code={`
<form>
  <div className="flex justify-center items-center gap-2">
    <Checkbox disabled/>
    <Label>terms and conditions</Label>
  </div>
</form>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxPage;


