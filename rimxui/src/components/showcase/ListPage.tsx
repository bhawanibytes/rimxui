import { List, ListItem } from "../list";
import PreviewWrapper from "../PreviewWrapper";

const ListPage = () => {
  const folders = [
    { id: 1, name: "Inbox", icon: "📥", count: 24 },
    { id: 2, name: "Drafts", icon: "📝", count: 5 },
    { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];
  return (
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
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <span>List</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">List</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          A versatile list component for displaying items with various styles,
          supporting multiple variants and customizations.
        </p>
      </div>

      <PreviewWrapper
        label="List"
        preview={
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
                  <span className="mr-3 text-xl">{folder.icon}</span>
                  <span>{folder.name}</span>
                </div>
              </ListItem>
            ))}
          </List>
        }
        code={`
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
        }`}
      />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Variants</h2>

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
        <h2 className="text-2xl font-bold tracking-tight">Features</h2>

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

        <h3 className="text-xl font-semibold mt-6">Without Gutters</h3>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <List variant="default">
            <ListItem>Regular Item</ListItem>
            <ListItem disableGutters>Item Without Gutters</ListItem>
            <ListItem>Regular Item</ListItem>
          </List>
        </div>

        <h3 className="text-xl font-semibold mt-6">Without Padding</h3>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <List variant="default">
            <ListItem>Regular Item</ListItem>
            <ListItem disablePadding>Item Without Padding</ListItem>
            <ListItem>Regular Item</ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
