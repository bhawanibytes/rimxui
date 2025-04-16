import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import Chip from "../components/Chips/chips";
import DarkModeToggle from "../components/DarkMode/dark";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ButtonImg from "../assets/images/buttons.png";
import { motion } from "framer-motion";
import CardImg from "../assets/images/Cards.png";
import BreadCrumbImg from "../assets/images/Breadcrumb.png";
import Chips from "../assets/images/Chips.png";
import ChipsGray from "../assets/images/ChipGray.png";
import List from "../assets/images/List.png";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* This is the Navbar */}
      <header>
        <nav className="bg-gradient-to-r dark:from-black via-gray-800 to-gray-900 text-white w-full ">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-around">
            <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
              RiMX UI<Chip>version 1.0.0 🔥</Chip>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link
                to={"/docs"}
                className="hover:text-blue-500 dark:text-gray-300 text-gray-600"
              >
                Docs
              </Link>
              <Link
                to={"/showcase"}
                className="hover:text-blue-500 dark:text-gray-300 text-gray-600"
              >
                Components
              </Link>
              <DarkModeToggle />
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
              <Link to={"/components"} className="block hover:text-blue-500">
                Components
              </Link>
              <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* This is the hero section */}
      <main className="max-w-7xl mx-auto p-8 h-screen ">
        <section className="flex items-center justify-center h-full ">
          {/* left side */}
          <div className="px-3 h-full">
            <div className="w-1/2  mt-16 flex items-start justify-center text-3xl flex-col ">
              <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text ">
                RiMX UI
              </span>{" "}
              <br />{" "}
              <p className="-mt-10 text-zinc-500 font-semibold text-nowrap ">
                Unleash the Rhythm of Components.
              </p>
            </div>

            <p className="mt-12 text-xl text-zinc-500">
              Build interfaces that groove with speed, style, and simplicity.
            </p>
            <Button label={`Get Started ->`} className="mt-8" />
          </div>
          {/* right side */}

          <div className="w-1/2 h-full relative">
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={ButtonImg}
              alt="ButtonComponent"
            />
            <motion.img
              initial={{ x: 0 }}
              animate={{ x: [0, -10, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={CardImg}
              alt="ButtonComponent"
              width={300}
              height={300}
              className=" mt-5"
            />
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={BreadCrumbImg}
              alt="ButtonComponent"
              className="absolute mt-5 top-40"
            />
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={Chips}
              alt="ButtonComponent"
              className="absolute mt-5 top-52 left-72"
            />
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={ChipsGray}
              alt="ButtonComponent"
              className="absolute mt-5 top-64 left-96"
            />
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={List}
              alt="ButtonComponent"
              className="absolute mt-5 top-96 -left-[500px]"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
