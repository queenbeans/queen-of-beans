import { useNavigate } from "react-router";
import { Button, ButtonGroup } from "../button";

interface Route {
  path: string;
  label: string;
}
export interface NavBarProps {
  routes: Route[];
}

export const NavBar = ({ routes }: NavBarProps) => {
  const navigate = useNavigate();
  return (
    <ButtonGroup>
      {routes.map((route) => (
        <Button key={route.path} onClick={() => navigate(route.path)}>
          {route.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};
