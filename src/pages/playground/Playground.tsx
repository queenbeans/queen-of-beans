import { ResumeBlock } from "../../components/content";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Section = styled.div`
  border: 1px solid white;
  padding: 1rem;
`;

export const Playground = () => {
  return (
    <>
      <h1>
        This is a space for me to sandbox the reusable components leveraged on
        this site
      </h1>
      <Container>
        <Section>
          <h1>Resume block component</h1>
          <ResumeBlock
            title="Sample"
            location="Location"
            dates="June 1996 - February 2025"
          >
            <div>
              This component renders a header section with basic details
            </div>
            <div>It also renders a list of bulleted items</div>
            <div>
              It is styled to look like a resume section and can be used for
              things like education, projects, and work experience.
            </div>
          </ResumeBlock>
        </Section>
      </Container>
    </>
  );
};
