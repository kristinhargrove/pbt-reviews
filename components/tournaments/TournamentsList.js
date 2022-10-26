import styled from "styled-components";
import { Link } from 'next/link';
import Tournament from "./Tournament";

export default function TournamentsList(props) {
  const { items } = props;

  return (
    <List>
      {items.length > 0 &&
        items.map((tournament) => (
          <Tournament
            name= {tournament.name}
            address = {tournament.address}
            type = {tournament.type}
            state = {tournament.state}
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
