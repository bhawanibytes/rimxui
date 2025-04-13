import { useState } from "react";
import Chip from "../Chips/chips";
// import { X } from "lucide-react";

export default function FullChipExample() {
  const [selectedTags, setSelectedTags] = useState([
    "React",
    "Tailwind",
    "Framer",
  ]);

  const handleDismiss = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 min-h-screen text-gray-800 dark:text-white space-y-6">
      <h2 className="text-xl font-semibold">Selected Tags</h2>

      {/* Selected tags displayed as dismissable chips */}
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

      <h2 className="text-xl font-semibold pt-6">Chip Variants</h2>

      <div className="space-y-4">
        {/* Full Example with all props used */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Primary Color</h3>
            <div className="flex gap-4">
              <Chip
                color="primary"
                variant="filled"
                dismissable
                onDismiss={() => alert("Primary Filled Dismissed")}
                className="p-2"
              >
                Primary Filled
              </Chip>
              <Chip
                color="primary"
                variant="outlined"
                dismissable
                onDismiss={() => alert("Primary Outlined Dismissed")}
                className="p-2"
              >
                Primary Outlined
              </Chip>
              <Chip
                color="primary"
                variant="soft"
                dismissable
                onDismiss={() => alert("Primary Soft Dismissed")}
                className="p-2"
              >
                Primary Soft
              </Chip>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Secondary Color</h3>
            <div className="flex gap-4">
              <Chip
                color="secondary"
                variant="filled"
                dismissable
                onDismiss={() => alert("Secondary Filled Dismissed")}
                className="p-2"
              >
                Secondary Filled
              </Chip>
              <Chip
                color="secondary"
                variant="outlined"
                dismissable
                onDismiss={() => alert("Secondary Outlined Dismissed")}
                className="p-2"
              >
                Secondary Outlined
              </Chip>
              <Chip
                color="secondary"
                variant="soft"
                dismissable
                onDismiss={() => alert("Secondary Soft Dismissed")}
                className="p-2"
              >
                Secondary Soft
              </Chip>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Danger Color</h3>
            <div className="flex gap-4">
              <Chip
                color="danger"
                variant="filled"
                dismissable
                onDismiss={() => alert("Danger Filled Dismissed")}
                className="p-2"
              >
                Danger Filled
              </Chip>
              <Chip
                color="danger"
                variant="outlined"
                dismissable
                onDismiss={() => alert("Danger Outlined Dismissed")}
                className="p-2"
              >
                Danger Outlined
              </Chip>
              <Chip
                color="danger"
                variant="soft"
                dismissable
                onDismiss={() => alert("Danger Soft Dismissed")}
                className="p-2"
              >
                Danger Soft
              </Chip>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Gray Color</h3>
            <div className="flex gap-4">
              <Chip
                color="gray"
                variant="filled"
                dismissable
                onDismiss={() => alert("Gray Filled Dismissed")}
                className="p-2"
              >
                Gray Filled
              </Chip>
              <Chip
                color="gray"
                variant="outlined"
                dismissable
                onDismiss={() => alert("Gray Outlined Dismissed")}
                className="p-2"
              >
                Gray Outlined
              </Chip>
              <Chip
                color="gray"
                variant="soft"
                dismissable
                onDismiss={() => alert("Gray Soft Dismissed")}
                className="p-2"
              >
                Gray Soft
              </Chip>
            </div>
          </div>
        </div>

        {/* Example without dismissing */}
        <div>
          <h3 className="font-semibold">Non-dismissable Chips</h3>
          <div className="flex gap-4">
            <Chip color="primary" variant="filled" className="p-2">
              Non-dismissible Primary Filled
            </Chip>
            <Chip color="secondary" variant="outlined" className="p-2">
              Non-dismissible Secondary Outlined
            </Chip>
            <Chip color="danger" variant="soft" className="p-2">
              Non-dismissible Danger Soft
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
}
