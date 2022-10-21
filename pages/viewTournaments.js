import { useEffect, useState } from "react";
import TournamentsList from "../components/tournaments/TournamentsList";
import Tournament from "../components/tournaments/Tournament";

export default function viewTournaments() {
  const [tournamentItems, setTournamentItems] = useState([]);

  const pbServiceUrl = process.env.pbServiceUrl;

  useEffect(() => {
    async function fetchData() {
      const tournamentsResponse = await fetch(`${pbServiceUrl}/tournaments`);

      const tournaments = await tournamentsResponse.json();

      console.log("got to tournaments");
      console.log(tournaments);

      setTournamentItems(tournaments);
    }
    fetchData();
  }, []);

  return (
  <div>
    <h1>Tournaments</h1>
    <TournamentsList 
      items={tournamentItems} 
    />
  </div>
  );
}
