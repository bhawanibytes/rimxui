import { useState } from "react";
import { Menu, X, CopyCheck } from "lucide-react";

const Navbar = () => {
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
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-blue-600">Rimxui</div>
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#pricing" className="hover:text-blue-500">Pricing</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-2 flex flex-col text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#pricing" className="hover:text-blue-500">Pricing</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
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
      {/* Copy Code Button - Top Left */}
      <button
        onClick={copyCode}
        className="absolute top-2 left-2 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        title="Copy Code"
      >
        <CopyCheck size={16} className={`text-gray-700 ${copied ? "text-green-500" : ""}`} />
      </button>

      {/* Navbar Preview */}
      <nav className="bg-white shadow-md w-full rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-blue-600">Rimxui</div>
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
              <a href="#home" className="hover:text-blue-500">Home</a>
              <a href="#about" className="hover:text-blue-500">About</a>
              <a href="#services" className="hover:text-blue-500">Services</a>
              <a href="#pricing" className="hover:text-blue-500">Pricing</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 py-4 space-y-2 flex flex-col text-gray-700 font-medium">
              <a href="#home" className="hover:text-blue-500">Home</a>
              <a href="#about" className="hover:text-blue-500">About</a>
              <a href="#services" className="hover:text-blue-500">Services</a>
              <a href="#pricing" className="hover:text-blue-500">Pricing</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
