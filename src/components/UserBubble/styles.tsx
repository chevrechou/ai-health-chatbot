import styled, { keyframes } from "styled-components";

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const BubbleContainer = styled.div`
  background-color: #7fff7f; /* Light green color for user bubble */
  border-radius: 10px;
  opacity: 0.5;
  padding: 10px;
  margin-bottom: 10px;
  white-space: pre-wrap; /* Preserve whitespace and allow wrapping */
  opacity: 0;
  transform: translateX(-20px);
  animation: ${fadeInFromRight} 0.5s ease forwards;
  margin-left: auto; /* Align to right */
  width: max-content;
`;

export const MessageText = styled.div`
  color: black;
  text-align: left;
`;
