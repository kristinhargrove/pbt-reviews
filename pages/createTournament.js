

export default function createTournamentForm() {
    return ( 
        <form action="/api/form" method="post">
            <label htmlFor="tournamentName">Tournament Name</label>
            <input type="text" id="tournamentName" required />
            <br />
            <label htmlFor="tournamentStartDate">Tournament Start Date</label>
            <input type="date" id="tournamentStartDate" required />
            <br />
            <label htmlFor="tournamentEndDate">Tournament End Date</label>
            <input type="date" id="tournamentEndDate" required />
            <br />
            <label htmlFor="tournamentLocation">Location Name</label>
            <input type="text" id="tournamentLocation" required />
            <br />
            <label htmlFor="tournamentAddress">Address</label>
            <input type="textfield" id="tournamentAddress" required />
            <br />
            <label htmlFor="tournamentAffiliation">Tournament Type</label>
            <input list="tournamentAffliation" required />
                <datalist id="tournamentAffliation">
                        <option value = "PPA" />
                        <option value = "APP" />
                        <option value = "Other" />   
                </datalist>
            <br />
        <button type="submit">Submit</button>
        </form>
    )
}