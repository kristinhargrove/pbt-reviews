import styled from "styled-components";
import {
  StyledFormElement,
  ControlSelect,
  Control,
  Controls,
  ControlLabel,
  FormButton,
} from "../components/ui/StyledForm";

import { Fragment, useState, useRef } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TextField from "@mui/material/TextField";

export async function createTournament(tournament) {
  console.log("calling create tournament");
  try {
    const response = await fetch("/api/tournament/createTournament", {
      method: "POST",
      body: JSON.stringify(tournament),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("create post response yo");
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
  } catch (error) {
    alert(error);
  }
}

export default function createTournamentForm(props) {
  const [tournamentStartDate, setTournamentStartDate] = useState();
  const [tournamentEndDate, setTournamentEndDate] = useState();
  const [nameError, setNameError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const typeInputRef = useRef();
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const addressInputRef = useRef();

  async function handleFormSubmit() {
    console.log("Submit form and make api call");
    console.log("Krissy boo");

    if (nameError || cityError || stateError || addressError) {
      return;
    }

    const tournament = {
      name: nameInputRef.current.value,
      city: cityInputRef.current.value,
      state: stateInputRef.current.value,
      address: addressInputRef.current.value,
      type: typeInputRef.current.value,
      startDate: tournamentStartDate["$d"],
      endDate: tournamentEndDate["$d"]
    };

    console.log(tournament);
    await createTournament(tournament);
  }

  function nameInputHandler() {
    console.log("changed value");
    console.log(nameInputRef.current.value);
    if (nameInputRef.current && nameInputRef.current.value === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  function cityInputHandler() {
    console.log("changed value");
    console.log(cityInputRef.current.value);
    if (cityInputRef.current && cityInputRef.current.value === "") {
      setCityError(true);
    } else {
      setCityError(false);
    }
  }

  function stateInputHandler() {
    console.log("changed state value");
    console.log(stateInputRef.current.value);
    if (stateInputRef.current && stateInputRef.current.value === "") {
      setStateError(true);
    } else {
      setStateError(false);
    }
  }

  function addressInputHandler() {
    console.log("changed address value");
    console.log(addressInputRef.current.value);
    if (addressInputRef.current && addressInputRef.current.value === "") {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  }

  const pbServiceUrl = process.env.pbServiceUrl;
  console.log("backend");
  console.log(pbServiceUrl);

  return (
    <Fragment>
      <Title>Create Tournament</Title>

      <StyledFormElement>
        <Control>
          <ControlLabel>Name</ControlLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            onChange={nameInputHandler}
            inputRef={nameInputRef}
            error={nameError}
            //helperText={nameError ? "Name cannot be empty" : " "}
            label="Enter the tournament name"
          />
        </Control>
      </StyledFormElement>
      <StyledFormElement>
        <Control>
          <ControlLabel>City</ControlLabel>
          <TextField
            id="outlined-basic"
            onChange={cityInputHandler}
            variant="outlined"
            inputRef={cityInputRef}
            fullWidth
            error={cityError}
            //helperText={emailError ? "Email cannot be empty" : " "}
            label="Enter Tournament City"
          />
        </Control>
      </StyledFormElement>
      <StyledFormElement>
        <Control>
          <ControlLabel>State</ControlLabel>
          <TextField
            id="outlined-basic"
            onChange={stateInputHandler}
            variant="outlined"
            inputRef={stateInputRef}
            fullWidth
            error={stateError}
            //helperText={emailError ? "Email cannot be empty" : " "}
            label="Enter Tournament State"
          />
        </Control>
      </StyledFormElement>

      <StyledFormElement action="/api/form" method="post">
        <Control>
          <ControlLabel>Address</ControlLabel>
          <TextField
            id="outlined-basic"
            onChange={addressInputHandler}
            variant="outlined"
            inputRef={addressInputRef}
            fullWidth
            error={addressError}
            //helperText={emailError ? "Email cannot be empty" : " "}
            label="Enter Tournament Address"
          />
        </Control>
      </StyledFormElement>

      <StyledFormElement>
        <Control>
          <ControlLabel>Start Date</ControlLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Tournament Start Date"
              value={tournamentStartDate}
              onChange={(newValue) => {
                setTournamentStartDate(newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Control>
      </StyledFormElement>

      <StyledFormElement>
        <Control>
          <ControlLabel>End Date</ControlLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Tournament End Date"
              value={tournamentEndDate}
              onChange={(newValue) => {
                setTournamentEndDate(newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Control>
      </StyledFormElement>

      <StyledFormElement>
        <Controls>
          <Control>
            <ControlLabel htmlFor="roleFilter">Type</ControlLabel>
            <ControlSelect ref={typeInputRef} id="type">
              <option value="PPA">PPA</option>
              <option value="APP">APP</option>
              <option value="Other">Other</option>
            </ControlSelect>
          </Control>
        </Controls>
      </StyledFormElement>

      <SubmitButtonContainer>
        <FormButton onClick={handleFormSubmit}>Submit</FormButton>
      </SubmitButtonContainer>
    </Fragment>
  );
}

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
`;

const SubmitButtonContainer = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin-top: 25px;
`;
