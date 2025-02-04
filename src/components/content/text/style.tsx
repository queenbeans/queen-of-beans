import styled from "styled-components";

export const Paragraph = styled.p`
  margin: 0.8rem 0;
`;

export const DisclaimerText = styled(Paragraph)`
  font-size: 0.8rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
