import { useState } from "react";
import { Menu, X } from "lucide-react";


const navLinks = [
  { name: "Explore", href: "#explore" },
  { name: "Products", href: "#products" },
  { name: "Community", href: "#community" },
];

const NavbarGradient = ({
  logo = "Rimxui",
  enableSearch = true,
  placeholder = "Search...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white w-full rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold">{logo}</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-gray-300">
              {link.name}
            </a>
          ))}
          {enableSearch && (
            <input
              type="text"
              placeholder={placeholder}
              className="px-3 py-1 rounded bg-gray-100 text-black text-sm"
            />
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="block hover:text-gray-300">
              {link.name}
            </a>
          ))}
          {enableSearch && (
            <input
              type="text"
              placeholder={placeholder}
              className="w-full mt-2 px-3 py-1 rounded bg-gray-100 text-black"
            />
          )}
        </div>
      )}
    </nav>
  );
};

export default NavbarGradient;
