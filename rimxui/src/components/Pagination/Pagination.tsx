type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const PaginationBasic = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="border border-gray-200 rounded-md p-4">
      <div className="flex flex-wrap gap-2 justify-center items-center">
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

export const PaginationOutlined = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="border border-blue-300 border-dashed rounded-xl p-5 bg-blue-50">
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-1.5 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-100 disabled:opacity-50"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-1.5 rounded-full border ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "border-blue-300 text-blue-700 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-1.5 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const PaginationGhost = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 text-sm hover:underline disabled:opacity-40"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 text-sm rounded ${
              page === currentPage
                ? "font-bold underline text-blue-600"
                : "hover:text-blue-500"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 text-sm hover:underline disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};
