import { RouteObject } from "react-router-dom";

import { Dump, Home } from "@pages";
import NavbarPage  from "@/components/showcase/NavbarPage";
import PaginationPage from "@/components/showcase/PaginationPage";
import ButtonPage from "@/components/showcase/ButtonPage";
import { CardPage } from "@/components/showcase/CardPage";
import { ColorShowcase } from "@/components/showcase/ColorShowcase";
import { ColorUsageShowcase } from "@/components/showcase/ColorUsageShowcase";
import ListPage from "@/components/showcase/ListPage";
import ShadowShowcase from "@/components/showcase/ShadowShowcase";
import { ShowcaseLayout } from "@/components/showcase/ShowcaseLayout";
import TypographyPage from "@/components/showcase/TypographyPage";
import { CHILD_ROUTES, ROUTES } from "./routes";
import BreadcrumbsPage from "@/components/showcase/BreadcrumpPage";

import SkeletonPage from "@/components/showcase/SkeletonPage";
import ChipsPage from "@/components/showcase/ChipsPage";
import AccordionPage from "@/components/showcase/AccordionPage";
import CounterPage from "@/components/showcase/CounterPage";
import DarkMode from "@/components/showcase/DarkMode";
import NotificationPage from "@/components/showcase/NotificationPage";

export const ROUTE_COMPONENTS: Array<RouteObject> = [
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.dump,
    element: <Dump />,
  },
  {
    path: ROUTES.showcase,
    element: <ShowcaseLayout />,
    children: [
      {
        index: true,
        element: <ColorShowcase />,
      },
      {
        path: CHILD_ROUTES.showcase.navbarpage,
        element: <NavbarPage />,
      },
      {
        path: CHILD_ROUTES.showcase.paginationpage,
        element: <PaginationPage />,
      },
      {
        path: CHILD_ROUTES.showcase.colors,
        element: <ColorShowcase />,
      },
      {
        path: CHILD_ROUTES.showcase.colorUsage,
        element: <ColorUsageShowcase />,
      },
      {
        path: CHILD_ROUTES.showcase.typography,
        element: <TypographyPage />,
      },
      {
        path: CHILD_ROUTES.showcase.buttons,
        element: <ButtonPage />,
      },
      {
        path: CHILD_ROUTES.showcase.cards,
        element: <CardPage />,
      },
      {
        path: CHILD_ROUTES.showcase.lists,
        element: <ListPage />,
      },
  
      {
        path: CHILD_ROUTES.showcase.shadows,
        element: <ShadowShowcase />,
      },
      {
        path: CHILD_ROUTES.showcase.breadcrumpspage,
        element: <BreadcrumbsPage />,
      },
      {
        path: CHILD_ROUTES.showcase.skeleton,
        element: <SkeletonPage />,
      },
      {
        path: CHILD_ROUTES.showcase.chips,
        element: <ChipsPage />,
      },
      {
        path: CHILD_ROUTES.showcase.accordion,
        element: <AccordionPage />,
      },
      {
        path: CHILD_ROUTES.showcase.counter,
        element: <CounterPage />,
      },
      {
        path: CHILD_ROUTES.showcase.darkMode,
        element: <DarkMode />,
      },
      {
        path:CHILD_ROUTES.showcase.notification,
        element: <NotificationPage/>
      }
    ],
  },
];
