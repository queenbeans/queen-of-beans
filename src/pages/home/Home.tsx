import { Outlet, useNavigate, useParams } from "react-router";
import { DropdownMenu, NavBar } from "../../components";
import { pageRoutes } from "../../useRouter";
import { DisclaimerText, Page, Paragraph } from "../../components/content";
import styled from "styled-components";
import { ButtonNoHover, GhostButton } from "../../components/button/Button";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    gap: 0;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <Layout>
      <NavBarContainer>
        <ButtonNoHover onClick={() => navigate("/queen-of-beans/")}>
          Queen of beans
        </ButtonNoHover>

        <DropdownMenu>
          <NavBar
            routes={pageRoutes.map((route) => ({
              label: route.name,
              path: route.path,
            }))}
          />
        </DropdownMenu>
      </NavBarContainer>
      <Content>
        {params["*"] ? (
          <Outlet />
        ) : (
          <>
            <Page
              title="Queen of beans"
              content={
                <Paragraph>
                  Hello! My name is Davian (aka Queen Beans). I created this
                  website to showcase my personal programming and art practices.
                  This site also functions as a way to experiment with different
                  web technologies. Feel free to explore the site and check out
                  my work!
                </Paragraph>
              }
              footer={
                <GhostButton onClick={() => navigate("/queen-of-beans/about")}>
                  About me
                </GhostButton>
              }
            />
            <DisclaimerText>
              Note, this website makes use of client side routing via React
              Router and is served using Github pages. If you attempt to refresh
              the page on a route other than the root, you will receive a 404
              error. This is expected behavior as Github pages does not support
              server side routing.
            </DisclaimerText>
          </>
        )}
      </Content>
    </Layout>
  );
};
