// Do not make this import absolute, it cause circular import and break the application
import { ROUTES } from "../../routes/routes";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navigation = [
  { name: "Getting Started", path: ROUTES.showcase },
  { name: "Introduction", path: "#" },
  { name: "Installation", path: "#" },
  { name: "Components", path: "#" },
  { name: "Colors", path: ROUTES.colorsShowcase },
  { name: "Typography", path: ROUTES.typographyShowcase },
  { name: "Buttons", path: ROUTES.buttonsShowcase },
  { name: "Cards", path: ROUTES.cardsShowcase },
  { name: "Lists", path: ROUTES.listsShowcase },
  { name: "Shadows", path: ROUTES.shadowsShowcase },
  { name: "Navbar", path: ROUTES.NavbarPage },
  { name: "Pagination", path: ROUTES.PaginationPage },
  { name: "Breadcrumps", path: ROUTES.BreadcrumbsPage },
  { name: "Skeleton", path: ROUTES.skeletonShowcase },
  { name: "Chips", path: ROUTES.chipsShowcase },
  { name: "Accordion", path: ROUTES.accordionShowcase },
  { name: "Countdown", path: ROUTES.counterShowcase },
  { name: "Darkmode", path: ROUTES.darkModeShowcase },
  { name: "ChatNotification", path: ROUTES.notificationShowcase },
];

export const ShowcaseLayout: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="flex">
          <div className="fixed top-0 left-0 bottom-0 w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex h-16 items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <Link
                  to="/showcase"
                  className="text-xl font-semibold text-neutral-900 dark:text-white"
                >
                  R<span className="text-red-500">i</span>MX UI
                </Link>
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
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
            </div> 
            <nav className="p-4 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-thumb]:bg-gray-300  dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pl-64 w-full">
            <main className="container max-w-4xl mx-auto py-6 px-8">
              <div className="space-y-2 pb-8">
                <div className="flex items-center space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>Components</span>
                  <span className="capitalize">
                    {location.pathname.split("/").pop()}
                  </span>
                </div>
              </div>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseLayout;
