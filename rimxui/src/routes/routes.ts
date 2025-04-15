

export const CHILD_ROUTES = {
  showcase: {
    colors: "colors",
    colorUsage: "color-usage",
    typography: "typography",
    buttons: "buttons",
    cards: "cards",
    lists: "lists",
    shadows: "shadows",
    navbarpage:"navbar",
    paginationpage:"pagination",
    breadcrumpspage:"breadcrumps",

    skeleton: "skeleton",
    chips: "chips",
    accordion: "accordion",
    counter: "counter",
    darkMode: "darkMode",
    notification: "notification",
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
  NavbarPage:`/showcase/${CHILD_ROUTES.showcase.navbarpage}`,
  PaginationPage:`/showcase/${CHILD_ROUTES.showcase.paginationpage}`,
  BreadcrumbsPage:`/showcase/${CHILD_ROUTES.showcase.breadcrumpspage}`,

  skeletonShowcase: `/showcase/${CHILD_ROUTES.showcase.skeleton}`,
  chipsShowcase: `/showcase/${CHILD_ROUTES.showcase.chips}`,
  accordionShowcase: `/showcase/${CHILD_ROUTES.showcase.accordion}`,
  counterShowcase: `/showcase/${CHILD_ROUTES.showcase.counter}`,
  darkModeShowcase: `/showcase/${CHILD_ROUTES.showcase.darkMode}`,
  notificationShowcase: `/showcase/${CHILD_ROUTES.showcase.notification}`,
} as const;
