import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavbarGradient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white w-full rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold">Rimxui</div>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#explore" className="hover:text-gray-300">Explore</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#community" className="hover:text-gray-300">Community</a>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded bg-gray-100 text-black text-sm"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <a href="#explore" className="block hover:text-gray-300">Explore</a>
          <a href="#products" className="block hover:text-gray-300">Products</a>
          <a href="#community" className="block hover:text-gray-300">Community</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full mt-2 px-3 py-1 rounded bg-gray-100 text-black"
          />
        </div>
      )}
    </nav>
  );
};

export default NavbarGradient;
