import styled from "styled-components";
import Button from "./Button";

const StyledFormElement = styled.form`
  margin: 2rem auto 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  width: 90%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

const Control = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

const ControlLabel = styled.label`
  font-weight: bold;
`;

const ControlSelect = styled.select`
  font: inherit;
  background-color: white;
  border-radius: 6px;
  width: 70%;
  padding: 0.25rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const FormButton = styled(Button)`
  width: 20%;
`;

export {
  StyledFormElement,
  Controls,
  Control,
  FormButton,
  ControlSelect,
  ControlLabel,
};
