import About from "../Pages/About";
import BlogDetail from "../Pages/BlogDetail";
import Home from "../Pages/Home";

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/blog-detail/:id", component: BlogDetail, exact: true },
  { path: "About", component: About, exact: true },
];
