import styled, { keyframes } from "styled-components";
import Button from "@mui/material/Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const BubbleContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 5px solid #add8e6;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 70%;
  width: max-content;
  animation: ${fadeIn} 0.5s ease forwards;
  opacity: 0;
  transform: translateX(-20px);
`;

export const MessageText = styled.div`
  color: black;
  text-align: left;
`;

export const FileUploadContainer = styled.div`
  margin-top: 5px;
`;

export const FileInput = styled.input`
  margin-top: 5px;
`;

export const NextStepButton = styled(Button)`
  && {
    color: #0d47a1;
    animation: ${fadeIn} 0.5s ease forwards; /* Apply animation */
    opacity: 0; /* Initial opacity */
    transform: translateX(-20px); /* Initial position */
    max-width: 70%;
    width: max-content;
    animation: ${fadeIn} 0.5s ease forwards;
    opacity: 0;
    transform: translateX(-20px);
    text-align: left;
    display: flex;
    border: 3px solid #add8e6;
    border-radius: 7px;
    &:hover {
      background-color: white; /* Darker blue color on hover */
    }
  }
`;
