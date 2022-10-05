import styled from "styled-components";
import Button from "../components/ui/Button";
import {
  StyledFormElement,
  ControlSelect,
  Control,
  Controls,
  ControlLabel,
  FormButton,
} from "../components/ui/StyledForm";

import { Fragment, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TextField from "@mui/material/TextField";

export default function createTournamentForm() {
  const [tournamentStartDate, setTournamentStartDate] = useState();
  const [tournamentEndDate, setTournamentEndDate] = useState();
  return (
    <Fragment>
      <Title>Create Tournament</Title>

      <StyledFormElement action="/api/form" method="post">
        <Control>
          <ControlLabel>Name</ControlLabel>
          <TextField
            id="outlined-basic"
            //onChange={emailInputHandler}
            variant="outlined"
            //inputRef={emailInputRef}
            fullWidth
            //error={emailError}
            //helperText={emailError ? "Email cannot be empty" : " "}
            label="Enter the tournament name"
          />
        </Control>
      </StyledFormElement>
      <StyledFormElement action="/api/form" method="post">
        <Control>
          <ControlLabel>City</ControlLabel>
          <TextField
            id="outlined-basic"
            //onChange={emailInputHandler}
            variant="outlined"
            //inputRef={emailInputRef}
            fullWidth
            //error={emailError}
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

      <StyledFormElement>
        <Controls>
          <Control>
            <ControlLabel htmlFor="roleFilter">Type</ControlLabel>
            <ControlSelect id="type">
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
