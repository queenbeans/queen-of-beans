import { Outlet, useNavigate } from "react-router";
import { Button, ButtonGroup, Layout } from "../components";
import { Header } from "../style";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header>Queen of Beans</Header>
      <ButtonGroup>
        <Button onClick={() => navigate("about")}>About</Button>
        <Button onClick={() => navigate("contact")}>Contact</Button>
        <Button onClick={() => navigate("services")}>Services</Button>
        <Button onClick={() => navigate("resume")}>Resume</Button>
      </ButtonGroup>
      <Outlet />
    </Layout>
  );
};
