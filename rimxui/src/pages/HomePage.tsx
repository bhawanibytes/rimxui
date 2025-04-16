import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import Chip from "../components/Chips/chips";
// import DarkModeToggle from "../components/DarkMode/dark";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

// import List from "../assets/images/List.png";
import DarkModeToggle from "@/components/DarkMode/dark";
import { Card, CardContent, CardFooter } from "@/components/Cards/Card";
import { BreadcrumbsOutlined } from "@/components/Breadcrump/BreadcrumpsGhost";
import { ListItem, List } from "@/components/list";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const folders = [
    { id: 1, name: "Inbox", icon: "📥", count: 24 },
    { id: 2, name: "Drafts", icon: "📝", count: 5 },
    { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];

  return (
    <>
      {/* This is the Navbar */}
      <header className="">
        <p className="w-full dark:text-black text-center bg-blue-200 py-1">
          This site is currently in Beta version 🚀
        </p>
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

      {/* This is the hero section */}
      <main className="relative max-w-7xl mx-auto p-8 h-screen ">
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 200, -300, 150, 0],
            y: [0, -200, 100, -150, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-sky-500/20 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -250, 300, -100, 0],
            y: [0, 150, -200, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 left-52 top-48 bg-pink-500/20 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 300, -200, 100, 0],
            y: [0, -150, 200, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 right-52 top-0 bg-yellow-500/20 rounded-full blur-3xl"
        ></motion.div>
        <section className="h-full w-full bg-transparent text-center">
          <p className="font-bold text-5xl text-zinc-700 pt-12">
            Design Fast. Develop Faster. With{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              RiMX UI
            </span>
            .
          </p>
          <p className="mt-8 text-zinc-600 w-full px-32 text-center ">
            RiMX UI is a sleek, developer-first React component library designed
            for speed, flexibility, and stunning design—helping you build
            modern, responsive interfaces with ease and elegance.
          </p>
          <Link to={"/showcase"}>
            <Button
              label="Get Started ->"
              variant="default"
              className="mt-16"
            />
          </Link>
        </section>

        {/* right side */}
        {/* <div className="w-1/2 h-full relative"> */}
        {/* <div className="absolute left-52 top-[500px]">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex items-center gap-3"
          >
            <Button label="Primary" variant="default" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Destructive" variant="destructive" />
            <Button label="Outline" variant="outline" />
            <Button label="Icon" variant="icon" />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Card>
              <img
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
                alt="Card image"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-semibold mb-2">
                  Beautiful Landscape
                </h3>
                <p className="text-gray-600">
                  This is a beautiful landscape image displayed in a card with a
                  title and description.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Posted by John Doe
                </span>
                <button className="text-blue-500 hover:text-blue-600">
                  Read more
                </button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute top-20 left-64"
          >
            <BreadcrumbsOutlined
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Docs",
                  href: "/docs",
                },
                {
                  label: "Breadcrumbs",
                },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Chip color="gray" className="absolute left-64">
              Gray Soft
            </Chip>
            <Chip color="danger" className="absolute left-80 -top-5">
              Danger
            </Chip>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute mt-5 top-96 -left-[650px] w-full"
          >
            <List variant="outline" listType="plain" bordered>
              {folders.map((folder) => (
                <ListItem
                  key={folder.id}
                  itemType="plain"
                  className="cursor-pointer"
                  secondaryAction={
                    folder.count > 0 ? (
                      <span
                        className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 
                          dark:text-primary-100 px-2 py-1 rounded-full text-body-xs"
                      >
                        {folder.count}
                      </span>
                    ) : null
                  }
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-xl">{folder.icon}</span>
                    <span className="text-body-md">{folder.name}</span>
                  </div>
                </ListItem>
              ))}
            </List>
          </motion.div>
        </div> */}
      </main>
    </>
  );
};

export default HomePage;
