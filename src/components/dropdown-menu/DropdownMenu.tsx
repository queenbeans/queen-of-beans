import * as React from "react";
import { Button, ButtonGroup } from "../button";
import { Menu } from "../icons";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const DropdownMenuButtonGroup = styled(ButtonGroup)`
  position: absolute;
  right: 0;
  z-index: 1;
  width: fit-content;
`;

export interface DropdownMenuProps {
  children: React.ReactNode;
}
export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={ref}>
      <Button onClick={toggleDropdown}>
        <Menu />
      </Button>
      {isOpen && (
        <DropdownMenuButtonGroup onClick={() => setIsOpen(false)}>
          {children}
        </DropdownMenuButtonGroup>
      )}
    </Container>
  );
};
