import styled from "styled-components";

export interface ResumeBlockProps {
  title: string;
  dates: string;
  location: string;
  children: React.ReactNode[];
}

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
`;

const LocationAndDateContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const List = styled.ul`
  padding-left: 3ch;
  margin-top: 0.5rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

export const ResumeBlock = ({
  title,
  location,
  dates,
  children,
}: ResumeBlockProps) => {
  return (
    <Container>
      <Header>
        <div>{title}</div>
        <LocationAndDateContainer>
          <div>{location}</div>
          <div>({dates})</div>
        </LocationAndDateContainer>
      </Header>
      <List>
        {children.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </List>
    </Container>
  );
};
