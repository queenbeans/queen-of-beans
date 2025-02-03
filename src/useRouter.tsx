import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./home";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/queen-of-beans",
      element: <Home />,
      children: [
        {
          path: "about",
          element: <div>About</div>,
        },
        {
          path: "*",
          element: <Navigate to="" />,
        },
      ],
    },
  ]);
};
