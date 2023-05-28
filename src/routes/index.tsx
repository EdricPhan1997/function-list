import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage, HomePage, DashboardPage } from "./element";

const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];

export default function Router() {
  return useRoutes(routes);
}
