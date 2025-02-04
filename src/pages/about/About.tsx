import { useNavigate } from "react-router";
import { GhostButton } from "../../components/button/Button";
import { Page, Paragraph } from "../../components/content";

export const About = () => {
  const navigate = useNavigate();

  return (
    <Page
      title="More about me"
      content={
        <>
          <Paragraph>
            Davian is a software engineer based in Pittsburgh, PA with a passion
            for building web applications. They have over 7 years of experience
            building world class production software with JavaScript,
            TypeScript, React, Node.js, Ruby / Ruby on Rails, .NET, GraphQL and
            more.
          </Paragraph>
          <Paragraph>
            They started their career as a full stack developer at a mid-sized
            fintech company, where they worked on a variety of projects
            including a customer facing web application, a RESTful API, and a
            real-time data processing system.
          </Paragraph>
          <Paragraph>
            Davian is also a practicing visual artist, and has a BFA in
            painting. Their practice leverages psychoanalysis to explore the
            relationship between generational trauma and the construction of the
            self.
          </Paragraph>
          <Paragraph>
            They are proud of their Latine, queer identity and fiercely advocate
            for human rights / justice around the globe and within their local
            community.
          </Paragraph>
        </>
      }
      footer={
        <GhostButton
          onClick={() => {
            navigate("/queen-of-beans/resume");
          }}
        >
          Check out my resume
        </GhostButton>
      }
    />
  );
};
