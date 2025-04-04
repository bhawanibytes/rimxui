import { List } from "@components/list/List";
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
    </div>
  );
};
