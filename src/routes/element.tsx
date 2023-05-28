import { Suspense, lazy, ElementType } from "react";
// components
import LoadingScreen, { LoadingButton } from "src/components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export const LoginPage = Loadable(lazy(() => import("src/pages/auth/LoginPages")));
export const HomePage = Loadable(lazy(() => import("src/pages/Home")));
export const DashboardPage = Loadable(lazy(() => import("src/pages/Dashboard")));
export const OverviewPage = Loadable(lazy(() => import("src/pages/Overview")));
