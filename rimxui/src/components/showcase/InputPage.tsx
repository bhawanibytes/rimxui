import { Label } from "../Label/Label";
import { Input } from "../Input/Input";
import PreviewWrapper from "../PreviewWrapper";
import Button from "../ui/Button";

const InputPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Input</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <div className="grid gap-6">
          <PreviewWrapper
            label="Form Component"
            variant="centered"
            preview={
              <form>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Email" className="mb-4" />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="mb-4"
                  />
                </div>
                <Button label="Signup" className="text-white" />
              </form>
            }
            code={`
<form>
  <div>
    <Label>Email</Label>
    <Input type="email" placeholder="Email" className="mb-4" />
  </div>
  <div>
    <Label>Password</Label>
    <Input type="password" placeholder="Password" className="mb-4" />
  </div>
  <Button label="Signup" className="text-white" />
</form>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default InputPage;

        