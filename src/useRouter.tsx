import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { About } from "./pages/about";

export const pageRoutes = [
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Resume",
    path: "resume",
    element: <div> Resume </div>,
  },
];
export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/queen-of-beans/*",
      element: <Home />,
      children: [
        ...pageRoutes.map((route) => ({
          path: route.path,
          element: route.element,
        })),
      ],
    },
  ]);
};
