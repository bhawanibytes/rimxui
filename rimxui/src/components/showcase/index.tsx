import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Showcase: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  const active = "font-medium text-gray-900 dark:text-white";
  const inactive = "text-gray-600 dark:text-gray-300";

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="container flex h-16 items-center justify-between px-4 md:px-8">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <span className="font-bold text-xl">rimxUI</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <a
                href="https://github.com/bhawanibytes/rimxui"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row">
            <aside className="md:w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 md:h-[calc(100vh-4rem)] py-6 md:py-8 pr-4 md:sticky md:top-16 overflow-y-auto hidden md:block">
              <nav className="space-y-1">
                <div className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Getting Started
                </div>
                <a
                  href="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Introduction
                </a>
                <Link
                  to="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Installation
                </Link>
                <Link
                  to="#"
                  className="block py-1 text-gray-900 dark:text-white font-medium text-sm"
                >
                  Components
                </Link>
              </nav>
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-4"></div>
              <nav className="space-y-1">
                <div className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Components
                </div>
                <Link
                  to="list"
                  className={`block py-1 text-sm ${splitLocation[2] === "list" ? active : inactive}`}
                >
                  List
                </Link>
                <Link
                  to="button"
                  className={`block py-1 text-sm ${splitLocation[2] === "button" ? active : inactive}`}
                >
                  Button
                </Link>
                <Link
                  to="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Card
                </Link>
                <Link
                  to="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Dialog
                </Link>
                <Link
                  to="pagination"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Pagination
                </Link>
                <Link
                  to="navbar"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Navbar
                </Link>
                <Link
                  to="breadcrumps"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Breadcrumps
                </Link>
              </nav>
            </aside>

            <main className="flex-1 py-6 md:py-12 md:pl-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
