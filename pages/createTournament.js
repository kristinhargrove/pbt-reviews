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

import { Fragment } from "react";

import TextField from "@mui/material/TextField";

export default function createTournamentForm() {
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
            label="Atlanta"
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
            label="Georgia"
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
            label="Georgia"
          />
        </Control>
      </StyledFormElement>

      <label htmlFor="tournamentStartDate">Tournament Start Date</label>
      <input type="date" id="tournamentStartDate" required />
      <br />
      <label htmlFor="tournamentEndDate">Tournament End Date</label>
      <input type="date" id="tournamentEndDate" required />
      <br />

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
