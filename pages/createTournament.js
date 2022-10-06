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

export default function createTournamentForm() {
  const [tournamentStartDate, setTournamentStartDate] = useState();
  const [tournamentEndDate, setTournamentEndDate] = useState();
  const [nameError, setNameError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const typeInputRef = useRef();
  const nameInputRef = useRef();
  const cityInputRef = useRef();

  async function submitHandler() {
    console.log("got in here");
    console.log("Krissy boo");
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
      <StyledFormElement action="/api/form" method="post">
        <Control>
          <ControlLabel>State</ControlLabel>
          <TextField
            id="outlined-basic"
            //onChange={emailInputHandler}
            variant="outlined"
            //inputRef={emailInputRef}
            fullWidth
            //error={emailError}
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
            //onChange={emailInputHandler}
            variant="outlined"
            //inputRef={emailInputRef}
            fullWidth
            //error={emailError}
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

      <StyledFormElement onSubmit={submitHandler}>
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
        <FormButton>Submit</FormButton>
      </StyledFormElement>

      <br />
    </Fragment>
  );
}

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
`;
