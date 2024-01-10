import { Route } from "@tanstack/react-router";
import { dashboardRoute } from "../../layouts";

const DashboardIDPage = () => {
  const { dashboardId } = dashboardRoute.useParams();

  return <h1>Dashboard is: {dashboardId}</h1>;
};

export const Idpage = new Route({
  getParentRoute: () => dashboardRoute,
  path: "$dashboardId",
  component: DashboardIDPage,
});
