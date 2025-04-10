import { List, ListItem } from "../list";
import PreviewWrapper from "../PreviewWrapper";

const ListPage = () => {
  const folders = [
    { id: 1, name: "Inbox", icon: "📥", count: 24 },
    { id: 2, name: "Drafts", icon: "📝", count: 5 },
    { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];

  const basicItems = [
    { id: 1, text: "First Item" },
    { id: 2, text: "Second Item" },
    { id: 3, text: "Third Item" },
  ];

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium">
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
          <span>Components</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span>List</span>
        </div>
        <h1 className="text-h1 text-neutral-900 dark:text-neutral-100">List</h1>
        <p className="text-body-lg text-neutral-500 dark:text-neutral-400">
          A versatile list component for displaying items with various styles,
          supporting multiple variants and customizations.
        </p>
      </div>

      <PreviewWrapper
        label="Interactive List Example"
        preview={
          <List variant="outline" listType="plain" bordered>
            {folders.map((folder) => (
              <ListItem
                key={folder.id}
                itemType="plain"
                className="cursor-pointer"
                secondaryAction={
                  folder.count > 0 ? (
                    <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-100 px-2 py-1 rounded-full text-body-xs">
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
        }
        code={`
<List variant="outline" listType="plain" bordered>
  {folders.map((folder) => (
    <ListItem
      key={folder.id}
      itemType="plain"
      className="cursor-pointer"
      secondaryAction={
        folder.count > 0 ? (
          <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 
            dark:text-primary-100 px-2 py-1 rounded-full text-body-xs">
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
</List>`}
      />

      <div className="space-y-8">
        <h2 className="text-h4 text-neutral-900 dark:text-neutral-100">List Variants</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Variant */}
          <PreviewWrapper
            label="Default"
            preview={
              <List variant="default" bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id} className="text-body-md">
                    {item.text}
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="default" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>`}
          />

          {/* Primary Variant */}
          <PreviewWrapper
            label="Primary"
            preview={
              <List variant="primary" bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id} className="text-body-md">
                    {item.text}
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="primary" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>`}
          />

          {/* Secondary Variant */}
          <PreviewWrapper
            label="Secondary"
            preview={
              <List variant="secondary" bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id} className="text-body-md">
                    {item.text}
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="secondary" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>`}
          />

          {/* Outline Variant */}
          <PreviewWrapper
            label="Outline"
            preview={
              <List variant="outline" bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id} className="text-body-md">
                    {item.text}
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="outline" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>`}
          />

          {/* Dark Variant */}
          <PreviewWrapper
            label="Dark"
            preview={
              <List variant="dark" bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id} className="text-body-md">
                    {item.text}
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="dark" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>`}
          />

          {/* Dark Primary Variant */}
          <PreviewWrapper
            label="Dark Primary"
            preview={
              <List variant="darkPrimary" bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id} className="text-body-md">
                    {item.text}
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="darkPrimary" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>`}
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-h4 text-neutral-900 dark:text-neutral-100">List Features</h2>

        {/* Selected Items */}
        <PreviewWrapper
          label="Selected Items"
          preview={
            <List variant="outline" bordered>
              <ListItem className="text-body-md">Regular Item</ListItem>
              <ListItem selected className="text-body-md">Selected Item</ListItem>
              <ListItem className="text-body-md">Regular Item</ListItem>
            </List>
          }
          code={`
<List variant="outline" bordered>
  <ListItem>Regular Item</ListItem>
  <ListItem selected>Selected Item</ListItem>
  <ListItem>Regular Item</ListItem>
</List>`}
        />

        {/* With Dividers */}
        <PreviewWrapper
          label="With Dividers"
          preview={
            <List variant="outline">
              <ListItem className="text-body-md">First Item</ListItem>
              <ListItem divider className="text-body-md">Item With Divider</ListItem>
              <ListItem className="text-body-md">Last Item</ListItem>
            </List>
          }
          code={`
<List variant="outline">
  <ListItem>First Item</ListItem>
  <ListItem divider>Item With Divider</ListItem>
  <ListItem>Last Item</ListItem>
</List>`}
        />

        {/* Different Sizes */}
        <PreviewWrapper
          label="Different Sizes"
          preview={
            <div className="space-y-4">
              <List variant="outline" size="sm" bordered>
                <ListItem>Small Size List Item</ListItem>
                <ListItem>Small Size List Item</ListItem>
              </List>
              <List variant="outline" size="md" bordered>
                <ListItem>Medium Size List Item</ListItem>
                <ListItem>Medium Size List Item</ListItem>
              </List>
              <List variant="outline" size="lg" bordered>
                <ListItem>Large Size List Item</ListItem>
                <ListItem>Large Size List Item</ListItem>
              </List>
            </div>
          }
          code={`
<List variant="outline" size="sm" bordered>
  <ListItem>Small Size List Item</ListItem>
  <ListItem>Small Size List Item</ListItem>
</List>

<List variant="outline" size="md" bordered>
  <ListItem>Medium Size List Item</ListItem>
  <ListItem>Medium Size List Item</ListItem>
</List>

<List variant="outline" size="lg" bordered>
  <ListItem>Large Size List Item</ListItem>
  <ListItem>Large Size List Item</ListItem>
</List>`}
        />

        {/* Different Spacing */}
        <PreviewWrapper
          label="Different Spacing"
          preview={
            <div className="space-y-4">
              <List variant="outline" spacing="small" bordered>
                <ListItem className="text-body-md">Small Spacing</ListItem>
                <ListItem className="text-body-md">Small Spacing</ListItem>
              </List>
              <List variant="outline" spacing="medium" bordered>
                <ListItem className="text-body-md">Medium Spacing</ListItem>
                <ListItem className="text-body-md">Medium Spacing</ListItem>
              </List>
              <List variant="outline" spacing="large" bordered>
                <ListItem className="text-body-md">Large Spacing</ListItem>
                <ListItem className="text-body-md">Large Spacing</ListItem>
              </List>
            </div>
          }
          code={`
<List variant="outline" spacing="small" bordered>
  <ListItem>Small Spacing</ListItem>
  <ListItem>Small Spacing</ListItem>
</List>

<List variant="outline" spacing="medium" bordered>
  <ListItem>Medium Spacing</ListItem>
  <ListItem>Medium Spacing</ListItem>
</List>

<List variant="outline" spacing="large" bordered>
  <ListItem>Large Spacing</ListItem>
  <ListItem>Large Spacing</ListItem>
</List>`}
        />
      </div>
    </div>
  );
};

export default ListPage;
