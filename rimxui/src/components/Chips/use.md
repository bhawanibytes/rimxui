
import { useState } from "react";
import Chip from "./components/chips/chips";

export default function UserChipExample() {
  const [selectedTags, setSelectedTags] = useState(["React", "Tailwind", "Framer"]);

  const handleDismiss = (tag) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 min-h-screen text-gray-800 dark:text-white space-y-6">
      <h2 className="text-xl font-semibold">Selected Tags</h2>

      <div className="flex flex-wrap gap-3">
        {selectedTags.map((tag) => (
          <Chip
            key={tag}
            color="gray"
            variant="outlined"
            dismissable
            onDismiss={() => handleDismiss(tag)}
          >
            {tag}
          </Chip>
        ))}
      </div>

      <h2 className="text-xl font-semibold pt-6">Status</h2>

      <div className="flex gap-4">
        <Chip color="primary" dismissable variant="filled">Active</Chip>
        <Chip color="danger" variant="soft">Blocked</Chip>
        <Chip color="gray" variant="outlined">Pending</Chip>
      </div>
    </div>
  );
}
