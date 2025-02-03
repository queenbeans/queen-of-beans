import { createBrowserRouter, Outlet } from "react-router";

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/queen-of-beans",
      element: (
        <>
          <div>Hello world</div>
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/about",
          element: <div>About</div>,
        },
      ],
    },
  ]);
};
