import { Route } from "@tanstack/react-router";
import { baseRoute } from "../../layouts";

const AboutPage = () => {
  return <h1>Welcome About</h1>;
};

export const about = new Route({
  getParentRoute: () => baseRoute,
  path: "/about",
  component: AboutPage,
});
