import * as React from "react";
import { Button, ButtonGroup } from "../button";
import { Menu } from "../icons";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
export interface DropdownMenuProps {
  children: React.ReactNode;
}
export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <Container>
      <Button onClick={toggleDropdown}>
        <Menu />
      </Button>
      {isOpen && <ButtonGroup>{children}</ButtonGroup>}
    </Container>
  );
};
