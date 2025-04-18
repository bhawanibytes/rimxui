import { Github, Linkedin, Menu, Star, Twitter, X } from "lucide-react";
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
import { NotificationContainer } from "../components/ChatNotification/NotificationContainer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useScroll } from "framer-motion";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const folders = [
    { id: 1, name: "Inbox", icon: "📥", count: 24 },
    { id: 2, name: "Drafts", icon: "📝", count: 5 },
    { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Vinay Rajput",
      profilePic: "",
      content:
        "RiMX UI has completely transformed my workflow. The components are so intuitive and visually stunning. I’m genuinely impressed!",
      role: "Web Developer",
    },
    {
      id: 2,
      name: "Bhawani Singh",
      profilePic: "",
      content:
        "I’ve used plenty of UI kits before, but RiMX UI stands out for its simplicity, flexibility, and developer-friendly design system.",
      role: "Full Stack developer",
    },
    {
      id: 3,
      name: "Rohit Rana",
      profilePic: "",
      content:
        "From prototyping to production, RiMX UI saved me hours. The dark mode support and consistent design language are just chef’s kiss.",
      role: "MERN stack developer",
    },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* This is the Navbar */}
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
      <main className=" max-w-7xl mx-auto p-8 h-screen ">
        {/* animation balls */}
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 200, -300, 150, 0],
            y: [0, -200, 100, -150, 0],
          }}
          transition={{
            duration: 20,
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
            duration: 23,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 left-52 top-48 bg-pink-500/20 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 30, -400, 30, 0],
            y: [0, 150, 300, 500, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 bottom-0 right-0 mb-10 mr-10 bg-yellow-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -400, 200, 0],
            y: [0, 150, 200, 150],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 right-52 top-0 bg-green-500/20 rounded-full blur-3xl"
        ></motion.div>

        <section className="h-full w-full bg-transparent text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ easings: "easeInOut", duration: 0.4, delay: 0.5 }}
            className="font-bold text-7xl bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent dark:text-zinc-300 pt-12"
          >
            Design Fast. Develop Faster. With{" "}
            <span className="bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent">
              R<span className="text-red-500">i</span>MX UI
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ easings: "easeInOut", delay: 0.6, duration: 0.8 }}
            className="mt-8 text-zinc-600 dark:text-zinc-400 w-full px-32 text-center "
          >
            RiMX UI is a sleek, developer-first React component library designed
            for speed, flexibility, and stunning design—helping you build
            modern, responsive interfaces with ease and elegance.
          </motion.p>

          <Link to={"/showcase"}>
            <Button
              label="Get Started ->"
              variant="default"
              className="mt-16"
            />
          </Link>
        </section>

        <section className="absolute md:w-[1200px] top-96 p-5 grid py-16 mt-32">
          <div className="mb-12 flex flex-col items-center gap-3">
            <h1 className="w-full  text-center font-bold text-4xl">
              Explore Our UI Building Blocks
            </h1>
            <p className="text-zinc-400">
              A sneak peek into the beautifully crafted components that power
              your next stunning interface.
            </p>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-3 justify-center">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: 0 * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              }}
            >
              <Button label="Primary" variant="default" />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: 1 * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              }}
            >
              <Button label="Secondary" variant="secondary" />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: 2 * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              }}
            >
              <Button label="Destructive" variant="destructive" />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: 3 * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              }}
            >
              <Button label="Outline" variant="outline" />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: 4 * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
              }}
            >
              <Button label="Icon" variant="icon" />
            </motion.div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -40, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              easings: ["easeInOut"],
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

          {/* BreadCrumb */}
          <motion.div
            animate={{ x: [0, -10, 0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-60 left-96"
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

          {/* Chips */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -10, 0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Chip color="gray" className="absolute left-64">
                Gray Soft
              </Chip>
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Chip color="danger" className="absolute left-80 -top-5">
                Danger
              </Chip>
            </motion.div>
          </div>

          {/* Lists */}
          <motion.div
            animate={{ x: [0, -20, 0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-96 top-80 w-3/5"
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

          {/* Notification */}
          <NotificationContainer />
        </section>

        {/* Customization components section */}
      </main>
      <section className="mt-96 ">
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -100, 150, 0],
            y: [0, -100, 100, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-2xl"
        ></motion.div>
        <div className="mb-12 flex flex-col items-center gap-3">
          <h1 className="w-full  text-center font-bold text-4xl">
            Make It Yours
          </h1>
          <p className="text-zinc-400">
            Personalize every pixel — from props to design tokens, your brand,
            your rules.
          </p>
        </div>

        <motion.div className="flex items-center gap-2">
          <div className="flex items-start pl-40 py-12 w-1/2  gap-2">
            <span className="border rounded-full px-3 py-1 border-zinc-400">
              1
            </span>{" "}
            <div className="">
              Easily override default styles using utility classes or custom
              props to match your brand’s look without breaking component
              structure or behavior.
            </div>
          </div>
          <div className="w-1/2 pr-40 py-12">
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              showLineNumbers={true}
              wrapLines={true}
              className="w-full"
            >
              {`<Button
  label="Get Started ->"
  variant="default"
  className="mt-16"
/>`}
            </SyntaxHighlighter>
          </div>
        </motion.div>

        <motion.div className="flex items-center gap-2">
          <div className="flex items-start pl-40 py-12 w-1/2  gap-2">
            <span className="border rounded-full px-3 py-1 border-zinc-400">
              2
            </span>{" "}
            <div className="">
              Switch between light and dark themes effortlessly with our live
              toggle — preview component styles in real time as you customize.
              <div className="flex items-center justify-start py-4 ">
                <DarkModeToggle variant="icon" />
                <DarkModeToggle variant="switch" />
                <DarkModeToggle variant="text" />
                <DarkModeToggle
                  variant="icon"
                  lightIcon="🔆" // Custom light mode icon
                  darkIcon="🌑" // Custom dark mode icon
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 pr-40 py-12 flex items-center justify-center">
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              showLineNumbers={true}
              wrapLines={true}
              className="w-full"
            >
              {`<DarkModeToggle variant="icon" />
<DarkModeToggle variant="switch" />
<DarkModeToggle variant="text" />
<DarkModeToggle
  variant="icon"
  lightIcon="🔆" // Custom light mode icon
  darkIcon="🌑" // Custom dark mode icon
/>`}
            </SyntaxHighlighter>
          </div>
        </motion.div>

        {/* Testimonials section */}
        <div className="mt-3">
          {/* heading and subtitle part */}
          <div className="mb-12 flex flex-col items-center gap-3">
            <h1 className="w-full  text-center font-bold text-4xl">
              Built with Passion. Backed by Devs.
            </h1>
            <p className="text-zinc-400">
              See how developers around the world are using RiMX UI to build
              fast, beautiful, and scalable user interfaces with ease.
            </p>
          </div>
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: [0, 200, 400, 600, 800, 1000, 800, 600, 400, 200, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{ scaleX: scrollYProgress }}
            className="absolute w-96 h-96 bg-white/10 rounded-full blur-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-32">
            {testimonials?.map((testimonial) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                key={testimonial?.id}
                className=" dark:bg-white/10 shadow-xl rounded-2xl p-6 w-full space-y-4 border border-zinc-200 dark:border-zinc-700 z-99 bg-transparent"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      testimonial?.profilePic ||
                      "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                    }
                    alt={`avatar`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {testimonial?.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonial?.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  “{testimonial?.content}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="relative z-10 backdrop-blur-xl bg-white/10 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 py-10 mt-20 rounded-t-2xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Branding */}
          <div>
            <Link
              to={"/"}
              className="text-xl bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent"
            >
              R<span className="text-red-500">i</span>MX UI{" "}
              <Chip>version 1.0.0 🔥</Chip>
            </Link>
            <p className="mt-2 text-sm">
              Build fast. Build beautifully. One component at a time.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/docs" className="hover:underline">
                  Components
                </Link>
              </li>
              <li>
                <Link to="#docs" className="hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h3 className="font-semibold text-zinc-800 dark:text-white">
              Connect
            </h3>
            <div className="flex gap-4">
              <Link
                to="https://github.com/bhawanibytes/rimxui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 hover:text-purple-500 transition" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 hover:text-purple-500 transition" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 hover:text-purple-500 transition" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-10 text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} RiMX UI. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default HomePage;
