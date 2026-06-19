import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import NotFoundPage from "@/modules/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("@/modules/home/pages/HomePage");
          return { Component };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { default: Component } = await import("@/modules/about/pages/AboutPage");
          return { Component };
        },
      },
      {
        path: "services",
        lazy: async () => {
          const { default: Component } = await import("@/modules/services/ServicesPage");
          return { Component };
        },
      },
      {
        path: "contact",
        lazy: async () => {
          const { default: Component } = await import("@/modules/contact/pages/ContactPage");
          return { Component };
        },
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
