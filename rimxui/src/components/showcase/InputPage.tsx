import { Label } from '../Label/label';
import { Input } from '../Input/input';

const InputPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <Label>Email</Label>
        <Input placeholder="Email" className="mb-4" />
      </div>
    </div>
  );
}

export default InputPage;