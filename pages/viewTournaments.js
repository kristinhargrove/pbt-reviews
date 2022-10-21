import { useEffect } from "react";

export default function viewTournaments() {

  const pbServiceUrl = process.env.pbServiceUrl;

  useEffect(() => {
    async function fetchData() {
      const tournamentsResponse = await fetch(`${pbServiceUrl}/tournaments`);

      const tournaments = await tournamentsResponse.json();

      console.log("got to tournaments");
      console.log(tournaments);
    }
    fetchData();
  }, []);

  return <div>TEST</div>;
}
