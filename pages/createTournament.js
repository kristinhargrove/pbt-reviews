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
import dynamic from "next/dynamic";
const MyAddressAutocomplete = dynamic(
  () => import("../components/ui/AddressAutocomplete"),
  {
    ssr: false,
  }
);

//import AddressAutocomplete from "mui-address-autocomplete";
import AutoComplete, { usePlacesWidget } from "react-google-autocomplete";

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
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const typeInputRef = useRef();
  const nameInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();

  const apiKey = "AIzaSyCAYE5-Fmphnv8AAb1xaCuHROniinZxyrI";

  async function handleFormSubmit() {
    console.log("Submit form and make api call");
    console.log("Krissy boo");

    if (city === "" || country === "") {
      return;
    }

    const tournament = {
      name: nameInputRef.current.value,
      city: city,
      state: state,
      address: address,
      country: country,
      type: typeInputRef.current.value,
      startDate: tournamentStartDate
        ? tournamentStartDate["$d"]
        : new Date(startDateInputRef.current.value),
      endDate: tournamentEndDate
        ? tournamentEndDate["$d"]
        : new Date(endDateInputRef.current.value),
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

  function cityInputHandler(place) {
    console.log("changed value");
    console.log(place);
    if (place && place === "") {
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

  function addressInputHandler(_, value) {
    console.log("changed address value");
    console.log(value);

    if (value.components && value.components.street_number) {
      const address =
        value.components.street_number[0].long_name +
        " " +
        value.components.route[0].long_name;
      const city = value.components.political[0].long_name;
      const state = value.components.political[2].long_name;
      const country = value.components.political[3].long_name;
      setAddress(address);
      setCity(city);
      setState(state);
      setCountry(country);
    } else if (value.components) {
      const city = value.components.political[0].long_name;
      const state = value.components.political[2].long_name;
      const country = value.components.political[3].long_name;
      setCity(city);
      setState(state);
      setCountry(country);
    } else {
      // do nothing
    }
  }

  const pbServiceUrl = process.env.pbServiceUrl;
  console.log("backend");
  console.log(pbServiceUrl);

  return (
    <Fragment>
      <Title>Create Tournament</Title>

      {/* <AutoComplete
        apiKey={apiKey}
        onPlaceSelected={(place) => console.log(place)}
      /> */}

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
          <ControlLabel>Start Date</ControlLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Tournament Start Date"
              value={tournamentStartDate}
              inputRef={startDateInputRef}
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
              inputRef={endDateInputRef}
              onChange={(newValue) => {
                setTournamentEndDate(newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Control>
      </StyledFormElement>
      <StyledFormElement>
        <Control>
          <ControlLabel>Location</ControlLabel>
          <MyAddressAutocomplete
            apiKey={apiKey}
            label="Address or City"
            fields={["geometry"]} // fields will always contain address_components and formatted_address, no need to repeat them
            onChange={addressInputHandler}
          />
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
