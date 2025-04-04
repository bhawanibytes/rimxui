import { List } from "@components/list/List";
import { ListItem } from "@components/list/ListItem";
import { ListSizes, ListSpacings, ListVariants } from "../types";

export const ShowcasePage = () => {
  const listVariants: Array<ListVariants> = [
    "default",
    "primary",
    "secondary",
    "outline",
  ];
  const listSizes: Array<ListSizes> = ["sm", "md", "lg"];
  const listSpacings: Array<ListSpacings> = ["small", "medium", "large"];
  const listBordered: Array<boolean> = [true, false];
  const listItemOptions = {
    disablePadding: [true, false],
    disableGutters: [true, false],
    divider: [true, false],
    selected: [true, false],
    itemType: ["list-item", "plain"] as const,
  };

  return (
    <div>
      <h1>Showcase</h1>
      {/* Unordered Lists - All Combinations */}
      <h2>Unordered Lists</h2>
      {listVariants.map((variant) =>
        listSizes.map((size) =>
          listSpacings.map((spacing) =>
            listBordered.map((bordered) => (
              <List
                key={`ul-${variant}-${size}-${spacing}-${bordered}`}
                listType="unordered"
                variant={variant}
                size={size}
                spacing={spacing}
                bordered={bordered}
              >
                <li>List Item 1</li>
                <li>List Item 2</li>
              </List>
            )),
          ),
        ),
      )}

      {/* Ordered Lists - All Combinations */}
      <h2>Ordered Lists</h2>
      {listVariants.map((variant) =>
        listSizes.map((size) =>
          listSpacings.map((spacing) =>
            listBordered.map((bordered) => (
              <List
                key={`ol-${variant}-${size}-${spacing}-${bordered}`}
                listType="ordered"
                variant={variant}
                size={size}
                spacing={spacing}
                bordered={bordered}
              >
                <li>List Item 1</li>
                <li>List Item 2</li>
              </List>
            )),
          ),
        ),
      )}

      {/* Plain Lists - All Combinations */}
      <h2>Plain Lists</h2>
      {listVariants.map((variant) =>
        listSizes.map((size) =>
          listSpacings.map((spacing) =>
            listBordered.map((bordered) => (
              <List
                key={`plain-${variant}-${size}-${spacing}-${bordered}`}
                listType="plain"
                variant={variant}
                size={size}
                spacing={spacing}
                bordered={bordered}
              >
                <div>List Item 1</div>
                <div>List Item 2</div>
              </List>
            )),
          ),
        ),
      )}

      {/* ListItem Component - All Combinations */}
      <h2>ListItem Component</h2>
      <h3>List Item Types</h3>
      {listItemOptions.itemType.map((itemType) => (
        <div key={`item-type-${itemType}`} className="mb-4">
          <h4>{itemType}</h4>
          <List listType={itemType === "list-item" ? "unordered" : "plain"}>
            <ListItem itemType={itemType}>
              Basic {itemType} without any options
            </ListItem>
            <ListItem itemType={itemType} secondaryAction={<span>Action</span>}>
              {itemType} with secondary action
            </ListItem>
          </List>
        </div>
      ))}

      <h3>Padding Options</h3>
      {listItemOptions.disablePadding.map((disablePadding) => (
        <div key={`padding-${disablePadding}`} className="mb-4">
          <h4>disablePadding: {disablePadding.toString()}</h4>
          <List listType="unordered">
            <ListItem disablePadding={disablePadding}>
              ListItem with disablePadding={disablePadding.toString()}
            </ListItem>
          </List>
        </div>
      ))}

      <h3>Gutters Options</h3>
      {listItemOptions.disableGutters.map((disableGutters) => (
        <div key={`gutters-${disableGutters}`} className="mb-4">
          <h4>disableGutters: {disableGutters.toString()}</h4>
          <List listType="unordered">
            <ListItem disableGutters={disableGutters}>
              ListItem with disableGutters={disableGutters.toString()}
            </ListItem>
          </List>
        </div>
      ))}

      <h3>Divider Options</h3>
      {listItemOptions.divider.map((divider) => (
        <div key={`divider-${divider}`} className="mb-4">
          <h4>divider: {divider.toString()}</h4>
          <List listType="unordered">
            <ListItem divider={divider}>
              ListItem with divider={divider.toString()}
            </ListItem>
            <ListItem>Another list item</ListItem>
          </List>
        </div>
      ))}

      <h3>Selected Options</h3>
      {listItemOptions.selected.map((selected) => (
        <div key={`selected-${selected}`} className="mb-4">
          <h4>selected: {selected.toString()}</h4>
          <List listType="unordered">
            <ListItem selected={selected}>
              ListItem with selected={selected.toString()}
            </ListItem>
          </List>
        </div>
      ))}

      <h3>Combined Options</h3>
      <List listType="unordered">
        <ListItem
          disablePadding={true}
          disableGutters={false}
          divider={true}
          selected={true}
          secondaryAction={<button>Click me</button>}
        >
          ListItem with multiple options
        </ListItem>
        <ListItem
          disablePadding={false}
          disableGutters={true}
          divider={false}
          selected={false}
        >
          Another item with different options
        </ListItem>
      </List>
    </div>
  );
};
