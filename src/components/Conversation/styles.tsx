import styled from "styled-components";
import { TextField, Button } from "@mui/material"; // Import TextField and Button from Material-UI

export const ConversationContainer = styled.div`
  width: 100%;
  width: 800px;
  margin: 0 auto;
  height: calc(100vh - 100px); /* Adjust for the height of the input area */
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px 10px;
  border: 5px solid black;
`;

export const UserInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const SendButton = styled(Button)`
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  padding: 8px 20px;
`;
