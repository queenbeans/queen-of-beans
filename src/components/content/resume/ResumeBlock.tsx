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
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LocationAndDateContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 0.6rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const List = styled.ul`
  padding-left: 3ch;
  margin: unset;
  li {
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
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
        <h4>{title}</h4>
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
