import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: transparent;

  &:hover {
    background-color: rgb(250, 169, 185);
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ButtonNoHover = styled(Button)`
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;
