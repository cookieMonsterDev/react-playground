import { Route } from "@tanstack/react-router";
import { dashboardRoute } from "../../layouts";

const DashboardPage = () => {
  return <h1>Welcome Dashboard</h1>;
};

export const dashboard = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: DashboardPage,
});
