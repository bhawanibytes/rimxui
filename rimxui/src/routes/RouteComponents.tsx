import { RouteObject } from "react-router-dom";

import { Dump, Home, ShadCNStypeShowcasePage } from "@pages";

import { ROUTES } from "./routes";
import { Showcase } from "@/components/showcase";
import ButtonPage from "@/components/showcase/ButtonPage";
import ListPage from "@/components/showcase/ListPage";

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
    element: <ShadCNStypeShowcasePage />,
  },
  {
    path: ROUTES.showcase,
    element: <Showcase />,
    children: [
      {
        path: "/showcase/list",
        element: <ListPage />,
      },
      {
        path: "/showcase/button",
        element: <ButtonPage />,
      },
    ],
  },
];
