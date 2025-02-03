import { createBrowserRouter } from "react-router";
import { About, Playground, Home, Resume } from "./pages";

export const pageRoutes = [
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Resume",
    path: "resume",
    element: <Resume />,
  },
  {
    name: "Playground / Sandbox",
    path: "playground",
    element: <Playground />,
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
