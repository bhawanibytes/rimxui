import { RouteObject } from "react-router-dom";

import { Dump, Home, ShowcasePage } from "@pages";

import { ROUTES } from "../routes";

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
    element: <ShowcasePage />,
  },
];
