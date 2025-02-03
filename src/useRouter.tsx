import { createBrowserRouter } from "react-router";
import { About, ArtPractice, Home, Resume } from "./pages";

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
    name: "Art Practice",
    path: "art-practice",
    element: <ArtPractice />,
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
