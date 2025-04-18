import { RouteObject } from "react-router-dom";

import { Home, ShowcasePageLayout } from "@pages";
import { ROUTES } from "./routes";
// import TogglePage from "@/components/showcase/TogglePage";

export const ROUTE_COMPONENTS: Array<RouteObject> = [
  {
    path: ROUTES.home,
    element: <Home />,
  },

  {
    path: ROUTES.showcase,
    element: <ShowcasePageLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <ColorShowcase />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.navbarpage,
    //     element: <NavbarPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.sidebarpage,
    //     element: <SidebarPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.paginationpage,
    //     element: <PaginationPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.colors,
    //     element: <ColorShowcase />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.colorUsage,
    //     element: <ColorUsageShowcase />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.layout,
    //     element: <LayoutPreview />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.typography,
    //     element: <TypographyPreview />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.buttons,
    //     element: <ButtonPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.cards,
    //     element: <CardPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.lists,
    //     element: <ListShowcasePage />,
    //   },

    //   {
    //     path: CHILD_ROUTES.showcase.shadows,
    //     element: <ShadowShowcase />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.breadcrumpspage,
    //     element: <BreadcrumbsPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.skeleton,
    //     element: <SkeletonPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.chips,
    //     element: <ChipsPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.accordion,
    //     element: <AccordionPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.counter,
    //     element: <CounterPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.darkMode,
    //     element: <DarkMode />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.notification,
    //     element: <NotificationPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.label,
    //     element: <LabelPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.input,
    //     element: <InputPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.textarea,
    //     element: <TextAreaPage />,
    //   },
    //   // {
    //   //   path:CHILD_ROUTES.showcase.toggle,
    //   //   element: <TogglePage/>
    //   // },
    //   {
    //     path: CHILD_ROUTES.showcase.radioButton,
    //     element: <RadioButtonPage />,
    //   },
    //   {
    //     path: CHILD_ROUTES.showcase.checkbox,
    //     element: <CheckboxPage />,
    //   },
    // ],
  },
];
