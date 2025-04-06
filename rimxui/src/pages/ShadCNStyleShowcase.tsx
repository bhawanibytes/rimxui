import { List, ListItem } from "@components";
import { useState } from "react";

/**
 * @deprecated:
 * TODO: Remove this component after creating sub components similar to
 * List component, so that we can showcase each component separately.
 *
 * And create our own showcase from our own custom components.
 */
export const ShadCNStypeShowcasePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [componentMode, setComponentMode] = useState<"preview" | "code">(
    "preview",
  );

  const folders = [
    { id: 1, name: "Inbox", icon: "📥", count: 24 },
    { id: 2, name: "Drafts", icon: "📝", count: 5 },
    { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

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
                <a
                  href="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Installation
                </a>
                <a
                  href="#"
                  className="block py-1 text-gray-900 dark:text-white font-medium text-sm"
                >
                  Components
                </a>
              </nav>
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-4"></div>
              <nav className="space-y-1">
                <div className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Components
                </div>
                <a
                  href="#"
                  className="block py-1 text-gray-900 dark:text-white font-medium text-sm"
                >
                  List
                </a>
                <a
                  href="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Card
                </a>
                <a
                  href="#"
                  className="block py-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 text-sm"
                >
                  Dialog
                </a>
              </nav>
            </aside>

            <main className="flex-1 py-6 md:py-12 md:pl-8">
              <div className="space-y-12 max-w-3xl">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium">
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
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <span>Components</span>
                    <span className="mx-2 text-gray-400 dark:text-gray-500">
                      /
                    </span>
                    <span>List</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight">List</h1>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    A versatile list component for displaying items with various
                    styles, supporting multiple variants and customizations.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Preview
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setComponentMode("preview");
                        }}
                        className="px-2.5 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => {
                          setComponentMode("code");
                        }}
                        className="px-2.5 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Code
                      </button>
                    </div>
                  </div>
                  {componentMode === "preview" && (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
                      <List variant="outline" listType="plain" bordered>
                        {folders.map((folder) => (
                          <ListItem
                            key={folder.id}
                            itemType="plain"
                            className="cursor-pointer"
                            secondaryAction={
                              folder.count > 0 ? (
                                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded-full text-xs">
                                  {folder.count}
                                </span>
                              ) : null
                            }
                          >
                            <div className="flex items-center">
                              <span className="mr-3 text-xl">
                                {folder.icon}
                              </span>
                              <span>{folder.name}</span>
                            </div>
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  )}
                </div>
                {componentMode === "code" && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Code</h2>
                    <div className="rounded-xl bg-gray-950 p-6 overflow-auto">
                      <pre className="text-gray-50 text-sm font-mono">
                        {/* TODO: Look into how we can highlight the syntax */}
                        <code>{`
import { List, ListItem } from "@components/list";

export default function ListExample() {
  const folders = [
  { id: 1, name: "Inbox", icon: "📥", count: 24 },
  { id: 2, name: "Drafts", icon: "📝", count: 5 },
  { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];
                          
  return (
    <List variant="outline" listType="plain" bordered>
      {folders.map((folder) => (
        <ListItem 
          key={folder.id}
          itemType="plain"
          className="cursor-pointer"
          secondaryAction={
            folder.count > 0 ? (
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 
                dark:text-blue-100 px-2 py-1 rounded-full text-xs">
                {folder.count}
              </span>
            ) : null
          }
          >
            <div className="flex items-center">
              <span className="mr-3 text-xl">{folder.icon}</span>
              <span>{folder.name}</span>
            </div>
        </ListItem>
      ))}
    </List>
  );
}`}</code>
                      </pre>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Variants
                  </h2>

                  <h3 className="text-xl font-semibold mt-4">Light Variants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Default</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="default" bordered>
                          <ListItem>Default List Item 1</ListItem>
                          <ListItem>Default List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Primary</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="primary" bordered>
                          <ListItem>Primary List Item 1</ListItem>
                          <ListItem>Primary List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Secondary</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="secondary" bordered>
                          <ListItem>Secondary List Item 1</ListItem>
                          <ListItem>Secondary List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Outline</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="outline" bordered>
                          <ListItem>Outline List Item 1</ListItem>
                          <ListItem>Outline List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8">Dark Variants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Dark</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="dark" bordered>
                          <ListItem>Dark List Item 1</ListItem>
                          <ListItem>Dark List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Dark Primary</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="darkPrimary" bordered>
                          <ListItem>Dark Primary List Item 1</ListItem>
                          <ListItem>Dark Primary List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Dark Secondary</h4>
                      <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <List variant="darkSecondary" bordered>
                          <ListItem>Dark Secondary List Item 1</ListItem>
                          <ListItem>Dark Secondary List Item 2</ListItem>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Features
                  </h2>

                  <h3 className="text-xl font-semibold mt-4">Selected Items</h3>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <List variant="default" bordered>
                      <ListItem>Regular Item</ListItem>
                      <ListItem selected>Selected Item</ListItem>
                      <ListItem>Regular Item</ListItem>
                    </List>
                  </div>

                  <h3 className="text-xl font-semibold mt-6">With Dividers</h3>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <List variant="default">
                      <ListItem>First Item</ListItem>
                      <ListItem divider>Item With Divider</ListItem>
                      <ListItem>Last Item</ListItem>
                    </List>
                  </div>

                  <h3 className="text-xl font-semibold mt-6">
                    Without Gutters
                  </h3>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <List variant="default">
                      <ListItem>Regular Item</ListItem>
                      <ListItem disableGutters>Item Without Gutters</ListItem>
                      <ListItem>Regular Item</ListItem>
                    </List>
                  </div>

                  <h3 className="text-xl font-semibold mt-6">
                    Without Padding
                  </h3>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <List variant="default">
                      <ListItem>Regular Item</ListItem>
                      <ListItem disablePadding>Item Without Padding</ListItem>
                      <ListItem>Regular Item</ListItem>
                    </List>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
