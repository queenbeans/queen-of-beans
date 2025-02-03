import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./pages/home";
import { About } from "./pages/about";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/queen-of-beans/*",
      element: <Home />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <Navigate to="" />,
        },
      ],
    },
  ]);
};
