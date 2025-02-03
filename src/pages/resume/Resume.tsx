import { Page, ResumeBlock, ResumeContainer } from "../../components/content";

export const Resume = () => {
  return (
    <Page>
      <ResumeContainer>
        <ResumeBlock
          title="Handshake"
          location="Remote"
          dates="November 2021 - February 2025"
        >
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
        </ResumeBlock>
        <ResumeBlock
          title="eMoney Advisor LLC"
          location="Providence, RI / Remote"
          dates="Sept. 2018- October 2021"
        >
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
          <div>Experience details will go here.</div>
        </ResumeBlock>
      </ResumeContainer>
    </Page>
  );
};
