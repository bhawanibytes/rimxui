export const CHILD_ROUTES = {
  showcase: {
    colors: "colors",
    colorUsage: "color-usage",
    typography: "typography",
    buttons: "buttons",
    cards: "cards",
    lists: "lists",
    shadows: "shadows",
  },
} as const;

export const ROUTES = {
  home: "/",
  dump: "/dump",
  showcase: "/showcase",
  colorsShowcase: `/showcase/${CHILD_ROUTES.showcase.colors}`,
  ColorUsageShowcase: `/showcase/${CHILD_ROUTES.showcase.colorUsage}`,
  typographyShowcase: `/showcase/${CHILD_ROUTES.showcase.typography}`,
  buttonsShowcase: `/showcase/${CHILD_ROUTES.showcase.buttons}`,
  cardsShowcase: `/showcase/${CHILD_ROUTES.showcase.cards}`,
  listsShowcase: `/showcase/${CHILD_ROUTES.showcase.lists}`,
  shadowsShowcase: `/showcase/${CHILD_ROUTES.showcase.shadows}`,
} as const;
