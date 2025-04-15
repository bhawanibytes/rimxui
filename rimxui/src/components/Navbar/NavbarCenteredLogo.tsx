import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavbarCenteredLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-around">
        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#pricing" className="hover:text-blue-500">Pricing</a>
        </div>

        <div className="text-xl font-bold text-blue-600">Rimxui</div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#blog" className="hover:text-blue-500 text-gray-700">Blog</a>
          <a href="#support" className="hover:text-blue-500 text-gray-700">Support</a>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
          <a href="#features" className="block hover:text-blue-500">Features</a>
          <a href="#pricing" className="block hover:text-blue-500">Pricing</a>
          <a href="#blog" className="block hover:text-blue-500">Blog</a>
          <a href="#support" className="block hover:text-blue-500">Support</a>
          <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarCenteredLogo;
