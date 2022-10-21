import styled from "styled-components";
import Tournament from "./Tournament";

export default function TournamentsList(props) {
  const { items } = props;

  return (
    <List>
      {items.length > 0 &&
        items.map((tournament) => (
          <Tournament
            name= {tournament.name}
          />
        ))}
    </List>
  );
}

const List = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 5rem auto 7rem auto;
`;
