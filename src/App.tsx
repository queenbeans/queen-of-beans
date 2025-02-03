import { RouterProvider } from "react-router";
import { useRouter } from "./useRouter";

const App = () => {
  const router = useRouter();
  return <RouterProvider router={router} />;
};

export default App;
