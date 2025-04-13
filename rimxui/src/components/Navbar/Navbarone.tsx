import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbarone = ({ logo = "Rimxui" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">{logo}</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navItems.map((item, idx) => (
              <Link key={idx} to={item.href} className="hover:text-blue-500">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-2 flex flex-col text-gray-700 font-medium">
            {navItems.map((item, idx) => (
              <Link key={idx} to={item.href} className="hover:text-blue-500">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarone;
