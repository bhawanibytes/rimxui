import { useState } from "react";
import { CopyCheck } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 left-2 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition md:top-3 md:left-3"
      title="Copy Code"
    >
      <CopyCheck
        size={16}
        className={`text-gray-700 ${copied ? "text-green-500" : ""}`}
      />
    </button>
  );
};

// Basic Pagination
export const PaginationBasic = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const codeSnippet = `
<PaginationBasic currentPage={${currentPage}} totalPages={${totalPages}} onPageChange={setPage} />
  `;

  return (
    <div className="relative border border-gray-200 rounded-md p-4">
      <CopyButton code={codeSnippet} />
      <div className="flex flex-wrap gap-2 justify-center items-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded border ${
              page === currentPage ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Add other pagination variants like PaginationEllipsis and PaginationMinimal similarly
