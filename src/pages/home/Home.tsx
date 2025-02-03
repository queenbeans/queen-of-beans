import { Outlet, useParams } from "react-router";
import { Layout, NavBar } from "../../components";
import { pageRoutes } from "../../useRouter";
import { Paragraph } from "../../components/content";

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
      {params["*"] && <Outlet />}
      <Paragraph>
        Note, this website makes use of client side routing via React Router and
        is served using Github pages. If you attempt to refresh the page on a
        route other than the root, you will receive a 404 error. This is
        expected behavior as Github pages does not support server side routing.
      </Paragraph>
    </Layout>
  );
};
