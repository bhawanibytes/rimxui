import { useState } from "react";

interface CollapsibleCodeBlockProps {
  code: string;
  linesToShow?: number;
}

const CollapsibleCodeBlock = ({ code, linesToShow = 10 }: CollapsibleCodeBlockProps) => {
  const [expanded, setExpanded] = useState(false);

  const lines = code.trim().split("\n");
  const shouldCollapse = lines.length > linesToShow;
  const visibleCode = expanded ? lines : lines.slice(0, linesToShow);

  return (
    <div className="rounded-md bg-gray-900 text-white font-mono text-sm overflow-hidden">
      <pre className="p-4 whitespace-pre-wrap">
        {visibleCode.join("\n")}
        {shouldCollapse && !expanded && "\n..."}
      </pre>
      {shouldCollapse && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-gray-800 hover:bg-gray-700 text-white w-full py-2 text-center text-xs font-medium transition"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default CollapsibleCodeBlock;
