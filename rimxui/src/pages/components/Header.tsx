import Chip from "@/components/Chips/chips";
import DarkModeToggle from "@/components/DarkMode/dark";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="z-50">
      <p className="w-full dark:text-black text-center bg-blue-200 py-1">
        This site is currently in Beta version 🚀
      </p>

      <nav className="  text-white w-full ">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-around">
          <Link
            to={"/"}
            className="text-xl bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent"
          >
            R<span className="text-red-500">i</span>MX UI{" "}
            <Chip>version 1.0.0 🔥</Chip>
          </Link>
          <Link
            to={"/"}
            className="text-xl bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent"
          >
            R<span className="text-red-500">i</span>MX UI{" "}
            <Chip>version 1.0.0 🔥</Chip>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to={"/docs"}
              className="hover:text-blue-500 dark:text-gray-300 text-gray-600"
            >
              Docs
            </Link>
            <Link
              to={"/docs"}
              className="hover:text-blue-500 dark:text-gray-300 text-gray-600"
            >
              Components
            </Link>
            <DarkModeToggle variant="switch" />
            <Chip color="gray">
              <Link to={""}>
                <Github className="w-4 h-4" />
              </Link>
            </Chip>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
            <Link to={"/docs"} className="block hover:text-blue-500">
              Docs
            </Link>
            <Link to={"/showcase"} className="block hover:text-blue-500">
              Components
            </Link>

            <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              <Link to={"/showcase"}> Get Started</Link>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
