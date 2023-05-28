import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage, HomePage, DashboardPage, OverviewPage } from "./element";
import AuthGuard from "src/auth/AuthGuard";
import { PATH_AFTER_LOGIN } from "src/config-global";
import DashboardLayout from "src/components/DashboardLayout";

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
    path: "",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
      {
        path: "/dashboard",
        children: [
          { element: <DashboardPage />, index: true },
          { path: "/dashboard/auth", element: <DashboardPage /> },
        ],

        breadcrumb: "Dashboard",
      },
      {
        path: "/overview",
        children: [{ element: <OverviewPage />, index: true }],
        breadcrumb: "Overview",
      },
    ],
  },
];

export default function Router() {
  return useRoutes(routes);
}
