import { useState } from "react";
import {
  PaginationBasic,
  PaginationOutlined,
  PaginationGhost,
} from "../Pagination/Pagination";
import PreviewWrapper from "../PreviewWrapper";

function PaginationPage() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);

  return (
    <div className="space-y-10 p-6">
      <PreviewWrapper
        label="Basic Pagination"
        preview={
          <PaginationBasic
            currentPage={page1}
            totalPages={5}
            onPageChange={setPage1}
          />
        }
        code={`<PaginationBasic currentPage={1} totalPages={5} onPageChange={setPage1} />`}
      />

      <PreviewWrapper
        label="Outlined Pagination"
        preview={
          <PaginationOutlined
            currentPage={page2}
            totalPages={5}
            onPageChange={setPage2}
          />
        }
        code={`<PaginationOutlined currentPage={1} totalPages={5} onPageChange={setPage2} />`}
      />

      <PreviewWrapper
        label="Ghost Pagination"
        preview={
          <PaginationGhost
            currentPage={page3}
            totalPages={5}
            onPageChange={setPage3}
          />
        }
        code={`<PaginationGhost currentPage={1} totalPages={5} onPageChange={setPage3} />`}
      />
    </div>
  );
}

export default PaginationPage;
