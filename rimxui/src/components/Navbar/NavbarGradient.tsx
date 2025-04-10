import { useState } from "react";
import { Menu, X, CopyCheck } from "lucide-react";

const NavbarGradient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const copyCode = () => {
    const code = `
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Rimxui</div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#explore" className="hover:text-gray-300">Explore</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#community" className="hover:text-gray-300">Community</a>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md text-black bg-gray-100"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#explore" className="block hover:text-gray-300">Explore</a>
          <a href="#products" className="block hover:text-gray-300">Products</a>
          <a href="#community" className="block hover:text-gray-300">Community</a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full mt-2 px-3 py-1 rounded-md text-black bg-gray-100"
          />
        </div>
      )}
    </nav>
    `.trim();

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative w-full border border-gray-200 rounded-xl shadow-sm">
      {/* Copy Button Top Left */}
      <button
        onClick={copyCode}
        className="absolute top-2 left-2 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        title="Copy Code"
      >
        <CopyCheck size={16} className={`text-gray-700 ${copied ? "text-green-500" : ""}`} />
      </button>

      {/* Navbar Preview */}
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
    </div>
  );
};

export default NavbarGradient;
