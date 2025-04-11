import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PreviewWrapperProps {
  label?: string;
  preview: React.ReactNode;
  code: string;
  language?: string;
  variant?: "default" | "centered";
}

const PreviewWrapper = ({
  label,
  preview,
  code,
  language = "tsx",
  variant = "default",
}: PreviewWrapperProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customStyle = {
    fontSize: "14px",
    borderRadius: "0",
    margin: 0,
    backgroundColor: "transparent",
  };

  return (
    <div className="group relative my-6 space-y-4">
      <div className="flex items-center justify-between">
        {label && (
          <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {label}
          </div>
        )}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <button
              onClick={() => setActiveTab("preview")}
              className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${
                activeTab === "preview"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${
                activeTab === "code"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Code
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div
          className={`${activeTab === "preview" ? "block" : "hidden"} ${
            variant === "centered"
              ? "flex min-h-[350px] justify-center items-center p-10"
              : "p-6"
          }`}
        >
          {preview}
        </div>
        <div className={activeTab === "code" ? "block" : "hidden"}>
          <div className="relative">
            <div className="overflow-x-auto">
              <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={customStyle}
                showLineNumbers={true}
                wrapLines={true}
                className="[&>*]:!bg-transparent"
              >
                {code.trim()}
              </SyntaxHighlighter>
            </div>
            <button
              onClick={handleCopy}
              className="absolute right-4 top-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewWrapper;
