async function handler(req, res) {
  if (req.method !== "POST") { //saying if it's not a post then just ignore it bc to creat tournament it must be a post
    return;
  }
  const tournamentData = req.body;
  const { name, city, state, address, startDate, endDate } = tournamentData;

  const pbServiceUrl = process.env.pbServiceUrl;

  // function to post to AWS backend
  const createTournamentResponse = await fetch(`${pbServiceUrl}/tournament`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      name,
      city,
      state,
      address,
      startDate,
      endDate
    }), // body data type must match "Content-Type" header
  });
  const createdTournament = await createTournamentResponse.json();
  console.log("created tournament");
  console.log(createdTournament);

  res
    .status(201)
    .json(createdTournament);
}

export default handler;