import { Outlet, useParams } from "react-router";
import { Layout } from "../../components";
import { Header } from "../../style";
import { NavBar } from "../../components/nav-bar";
import { pageRoutes } from "../../useRouter";

export const Home = () => {
  const params = useParams();
  return (
    <Layout>
      <NavBar
        routes={pageRoutes.map((route) => ({
          label: route.name,
          path: route.path,
        }))}
      />
      {params["*"] ? <Outlet /> : <Header>Home</Header>}
    </Layout>
  );
};
