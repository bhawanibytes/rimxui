import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTE_COMPONENTS } from "@routes";

const App: React.FC = () => (
  <RouterProvider router={createBrowserRouter(ROUTE_COMPONENTS)} />
);

export default App;
