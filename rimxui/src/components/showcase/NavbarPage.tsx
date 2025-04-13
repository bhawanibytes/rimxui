import Navbarone from "../Navbar/Navbarone";
import NavbarCenteredLogo from "../Navbar/NavbarCenteredLogo";
import NavbarGradient from "../Navbar/NavbarGradient";
import PreviewWrapper from "../PreviewWrapper";

const responsiveNavbarCode = `
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full rounded-xl">
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
  );
};

export default Navbarone;
`.trim();

const centeredLogoCode = `
const NavbarCenteredLogo = () => {
  return (
    <nav className="bg-white shadow-md w-full rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-blue-600 mx-auto">Rimxui</div>
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium absolute right-4">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#pricing" className="hover:text-blue-500">Pricing</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCenteredLogo;
`.trim();

const gradientNavbarCode = `
const NavbarGradient = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-full rounded-xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold">Rimxui</div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-gray-200">Home</a>
            <a href="#about" className="hover:text-gray-200">About</a>
            <a href="#services" className="hover:text-gray-200">Services</a>
            <a href="#pricing" className="hover:text-gray-200">Pricing</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGradient;
`.trim();

function NavbarPage() {
  return (
    <div className="flex flex-col gap-10">
      <PreviewWrapper
        label="Responsive Navbar"
        preview={<Navbarone />}
        code={responsiveNavbarCode}
      />
      <PreviewWrapper
        label="Centered Logo Navbar"
        preview={<NavbarCenteredLogo />}
        code={centeredLogoCode}
      />
      <PreviewWrapper
        label="Gradient Navbar"
        preview={<NavbarGradient />}
        code={gradientNavbarCode}
      />
    </div>
  );
}

export default NavbarPage;
