import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarCenteredLogo from "./components/Navbar/NavbarCenteredLogo";
import NavbarGradient from "./components/Navbar/NavbarGradient.tsx";
import { PaginationBasic } from "./components/Pagination/Pagination.tsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="pt-20 space-y-20">
      <section className="border-b pb-10">
        <h2 className="text-xl font-semibold text-center mb-4"></h2>
        <Navbar />
      </section>

      <section className="border-b pb-10">
        <h2 className="text-xl font-semibold text-center mb-4"></h2>
        <NavbarCenteredLogo />
      </section>

      <section className="border-b pb-10">
        <h2 className="text-xl font-semibold text-center mb-4"></h2>
        <NavbarGradient />
      </section>

      <section className="border-b pb-10">
        <h2 className="text-xl font-semibold text-center mb-4">Pagination Example</h2>
        <div className="flex justify-center">
          <PaginationBasic
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
