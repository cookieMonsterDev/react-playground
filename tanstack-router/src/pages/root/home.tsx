import { Route } from "@tanstack/react-router";
import { baseRoute } from "../../layouts";

const HomePage = () => {
  return <h1>Welcome Home</h1>;
};

export const home = new Route({
  getParentRoute: () => baseRoute,
  path: "/",
  component: HomePage,
});
