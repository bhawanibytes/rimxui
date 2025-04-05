import React, { FC, useState } from "react";

interface PreviewWrapperProps {
  label: string;
  preview: React.ReactNode;
  code: string;
}

const PreviewWrapper: FC<PreviewWrapperProps> = ({ label, preview, code }) => {
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold mt-4">{label}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(true)}
            className={`px-2.5 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 ${showPreview && "bg-gray-100 dark:bg-gray-800"}`}
          >
            Preview
          </button>
          <button
            onClick={() => setShowPreview(false)}
            className={`px-2.5 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 ${!showPreview && "bg-gray-100 dark:bg-gray-800"}`}
          >
            Code
          </button>
        </div>
      </div>
      {showPreview ? (
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
          {preview}
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Code</h2>
          <div className="rounded-xl bg-gray-950 p-6 overflow-auto">
            <pre className="text-gray-50 text-sm font-mono">
              {/* TODO: Look into how we can highlight the syntax */}
              <code>{code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewWrapper;
