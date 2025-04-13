import { useState } from "react";
import { Menu, X } from "lucide-react";


const leftLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
];

const rightLinks = [
  { name: "Blog", href: "#blog" },
  { name: "Support", href: "#support" },
];

const NavbarCenteredLogo = ({
  logo = "Rimxui",
  ctaText = "Get Started",
  ctaLink = "#get-started",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-around">
        {/* Left Links */}
        <div className="hidden md:flex gap-6 text-gray-700">
          {leftLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-blue-500">
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">{logo}</div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-6">
          {rightLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-blue-500 text-gray-700">
              {link.name}
            </a>
          ))}
          <a
            href={ctaLink}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
          {[...leftLinks, ...rightLinks].map((link, idx) => (
            <a key={idx} href={link.href} className="block hover:text-blue-500">
              {link.name}
            </a>
          ))}
          <a
            href={ctaLink}
            className="w-full mt-2 block bg-blue-500 text-white py-2 text-center rounded hover:bg-blue-600"
          >
            {ctaText}
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarCenteredLogo;
