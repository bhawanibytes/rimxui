import { useState } from "react";
import Chip from "../Chips/chips";
import { CliTabs } from "../CliTabs/CliTab";
import PreviewWrapper from "../PreviewWrapper";

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
    <div className="p-6 bg-white dark:bg-neutral-900 min-h-screen text-gray-800 dark:text-white space-y-6">
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/chips.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/chips.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/chips.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/chips.json",
          }}
        />
      </section>
      <PreviewWrapper
        label="Selected Tags"
        variant="centered"
        preview={
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
        }
        code={`
import { Chip } from "@/components/ui/chips"

const [selectedTags, setSelectedTags] = useState([
    "React",
    "Tailwind",
    "Framer",
  ]);
const handleDismiss = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };
  
function selectedChips () {
return (
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
    )
  }
`}
      />

      <h2 className="text-xl font-semibold pt-6">Chip Variants</h2>
      <PreviewWrapper
        label="Primary Color Chips"
        variant="centered"
        preview={
          <div className="flex flex-wrap gap-3">
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
        }
        code={`
import { Chip } from "@/components/ui/chips"
  
function primaryChips () {
return (
  <div className="flex flex-wrap gap-3">
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
    )
  }
`}
      />

      <PreviewWrapper
        label="Secondary Color Chips"
        variant="centered"
        preview={
          <div className="flex flex-wrap gap-3">
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
        }
        code={`
import { Chip } from "@/components/ui/chips"
  
function secondaryChips () {
return (
  <div className="flex flex-wrap gap-3">
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
    )
  }
`}
      />
      <PreviewWrapper
        label="Danger Color Chips"
        variant="centered"
        preview={
          <div className="flex flex-wrap gap-3">
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
        }
        code={`
import { Chip } from "@/components/ui/chips"
  
function dangerChips () {
return (
  <div className="flex flex-wrap gap-3">
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
    )
  }
`}
      />
      <PreviewWrapper
        label="Gray Color Chips"
        variant="centered"
        preview={
          <div className="flex flex-wrap gap-3">
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
        }
        code={`
import { Chip } from "@/components/ui/chips"
  
function grayChips () {
return (
  <div className="flex flex-wrap gap-3">
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
    )
  }
`}
      />
      <PreviewWrapper
        label="Non-dismissible Color Chips"
        variant="centered"
        preview={
          <div className="flex flex-wrap justify-center gap-3">
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
        }
        code={`
import { Chip } from "@/components/ui/chips"
  
function nonDismissibleChips () {
return (
  <div className="flex flex-wrap justify-center gap-3">
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
    )
  }
`}
      />
    </div>
  );
}
