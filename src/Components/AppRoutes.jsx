import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../router/routes"; // Import your route configuration here
import Posts from "../Pages/BlogDetail"; // Correct the import path

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          element={<route.component />} // Use JSX syntax to render the component
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route element={<Posts />} path="*" />
    </Routes>
  );
}
