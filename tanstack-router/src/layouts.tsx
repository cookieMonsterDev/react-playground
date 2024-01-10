import { Link, Outlet, RootRoute, Route } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { about, home } from "./pages/root";
import { dashboard, Idpage } from "./pages/dashboard";

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

export const baseRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

export const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/dashboard" className="[&.active]:font-bold">
          Dashboard
        </Link>{"   "}
        <Link to="/dashboard/123" className="[&.active]:font-bold">
          User-123
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

export const routeTree = rootRoute.addChildren([
  baseRoute.addChildren([about]),
  dashboardRoute.addChildren([dashboard, Idpage]),
]);
