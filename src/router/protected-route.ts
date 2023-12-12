import { lazy } from "react";

const protectedRoute = [
  {
    path: "/profile",
    component: lazy(() => import("../pages/Profile")),
  },
];

export default protectedRoute;
