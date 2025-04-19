import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Chip from "@/components/Chips/chips";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 backdrop-blur-xl bg-white/10 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 py-10   shadow-2xl">
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
              <Link to="/docs" className="hover:underline">
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
  );
};

export default Footer;
