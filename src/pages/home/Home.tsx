import { Outlet, useParams } from "react-router";
import { Layout } from "../../components";
import { Header } from "../../style";
import { NavBar } from "../../components/nav-bar";

export const Home = () => {
  const params = useParams();
  return (
    <Layout>
      <NavBar
        routes={[
          {
            label: "About",
            path: "about",
          },
        ]}
      />
      {params["*"] ? <Outlet /> : <Header>Home</Header>}
    </Layout>
  );
};
