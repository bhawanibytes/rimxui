import { Label } from "../Label/Label";
import { Input } from "../Input/Input";

const InputPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" className="mb-4" />
        </div>
        <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default InputPage;
