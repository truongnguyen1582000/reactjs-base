import { lazy } from "react";

const publicRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("../pages/About")),
  },
];

export default publicRoutes;
