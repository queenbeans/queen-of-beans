import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PageContent = styled.div`
  padding: 0.75rem;
  margin: 1rem 0;
  min-height: 20vh;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.1);
`;

const PageFooter = styled.div`
  width: fit-content;
  align-self: center;
`;
export interface PageProps {
  title: string;
  content: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
}

export const Page = ({ title, content, footer }: PageProps) => {
  return (
    <PageContainer>
      <h1>{title}</h1>
      <PageContent>{content}</PageContent>
      <PageFooter>{footer}</PageFooter>
    </PageContainer>
  );
};
