import React, { useState } from "react";
import {
  BubbleContainer,
  FileInput,
  FileUploadContainer,
  MessageText,
  NextStepButton,
} from "./styles";

const MessageBubble = ({
  prompt,
  supportFileSubmission = false,
  onNextStep,
}) => {
  const [file, setFile] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleNextStepClick = () => {
    setButtonClicked(true);
    onNextStep();
  };

  return (
    <>
      <BubbleContainer>
        <MessageText>{prompt}</MessageText>
      </BubbleContainer>

      {supportFileSubmission && (
        <BubbleContainer>
          <FileUploadContainer>
            <div>Upload File:</div>
            <FileInput type="file" onChange={handleFileChange} />
          </FileUploadContainer>{" "}
        </BubbleContainer>
      )}

      {!buttonClicked && (
        <NextStepButton onClick={handleNextStepClick}>Next Step</NextStepButton>
      )}
    </>
  );
};

export default MessageBubble;
