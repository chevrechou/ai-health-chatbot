import React from "react";
import { SendButton, UserInputContainer } from "../Conversation/styles";
import { TextField } from "@mui/material";

const UserInput = ({
  userMessage,
  handleInputChange,
  handleKeyPress,
  handleSendClick,
}) => {
  return (
    <UserInputContainer>
      <TextField
        label="Type your message..."
        variant="outlined"
        value={userMessage}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        multiline
        maxRows={5}
        sx={{ flex: 1, marginRight: "10px" }}
      />
      <SendButton onClick={handleSendClick}>Send</SendButton>
    </UserInputContainer>
  );
};

export default UserInput;
