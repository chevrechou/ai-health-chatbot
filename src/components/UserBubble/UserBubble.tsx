import React from "react";
import { BubbleContainer, MessageText } from "./styles";

const UserBubble = ({ message, supportFileSubmission }) => {
  const [file, setFile] = React.useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <BubbleContainer>
        <MessageText>{message}</MessageText>
      </BubbleContainer>
    </>
  );
};

export default UserBubble;
