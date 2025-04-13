import Navbarone from "../Navbar/Navbarone";
import NavbarCenteredLogo from "../Navbar/NavbarCenteredLogo";
import NavbarGradient from "../Navbar/NavbarGradient";
import PreviewWrapper from "../PreviewWrapper";
import CollapsibleCodeBlock from "../Navbar/CollapsibleCodeBlock";


const responsiveNavbarCode = `
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbarone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full rounded-xl">
      ...
    </nav>
  );
};

export default Navbarone;
`.trim();

const centeredLogoCode = `
const NavbarCenteredLogo = () => {
  return (
    <nav className="bg-white shadow-md w-full rounded-xl">
      ...
    </nav>
  );
};

export default NavbarCenteredLogo;
`.trim();

const gradientNavbarCode = `
const NavbarGradient = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-full rounded-xl shadow-md">
      ...
    </nav>
  );
};

export default NavbarGradient;
`.trim();

function NavbarPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">This is my navbar component</h1>

      <PreviewWrapper
        label="Responsive Navbar"
        preview={<Navbarone />}
        code={<CollapsibleCodeBlock code={responsiveNavbarCode} />}
      />
      <PreviewWrapper
        label="Centered Logo Navbar"
        preview={<NavbarCenteredLogo />}
        code={<CollapsibleCodeBlock code={centeredLogoCode} />}
      />
      <PreviewWrapper
        label="Gradient Navbar"
        preview={<NavbarGradient />}
        code={<CollapsibleCodeBlock code={gradientNavbarCode} />}
      />
    </div>
  );
}

export default NavbarPage;
