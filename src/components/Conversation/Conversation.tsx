import React, { useEffect, useRef, useState } from "react";
import { ConversationContainer } from "./styles";
import MessageBubble from "../MessageBubble/MessageBubble";
import UserBubble from "../UserBubble/UserBubble";
import { startConversation } from "../../controller/controller";
import {
  ConversationPayload,
  Message,
  QUESTIONS,
} from "../../constants/questions";
import UserInput from "../UserInput/UserInput";

const Conversation = () => {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(1);
  const [userPayload, setUserPayload] = useState<ConversationPayload>({
    currentQuestionId: 1,
    userResponses: [],
  });

  const conversationEndRef = useRef<HTMLDivElement>(null);

  const addMessage = (message: Message) => {
    setConversation([...conversation, message]);
  };

  const handleInputChange = (e) => {
    const userMessage = e.target.value;
    setUserMessage(userMessage);
  };
  const handleSendClick = () => {
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (userMessage.trim() !== "") {
      addMessage({
        message: userMessage,
        type: "user",
      });
      updateUserPayload(userPayload, userMessage);

      setUserMessage("");
    }
  };

  const updateUserPayload = (
    payload: ConversationPayload,
    userInput: string
  ) => {
    const updatedPayload = { ...payload };
    updatedPayload.currentQuestionId = currentMessageIndex;
    updatedPayload.userResponses.push(userInput);
    console.log(updatedPayload);

    return updatedPayload;
  };

  const handleNextStep = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
    // call api by sending the userPayload out

    //
    console.log(userPayload, "next question");
    setUserPayload({
      currentQuestionId: currentMessageIndex + 1,
      userResponses: [],
    }); // reset payload
  };

  useEffect(() => {
    startConversation(addMessage, currentMessageIndex);
  }, [currentMessageIndex]);

  useEffect(() => {
    conversationEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <>
      <ConversationContainer>
        {conversation.map((item, index) => {
          if (item?.type === "user") {
            return (
              <UserBubble
                key={index}
                message={item.message}
                supportFileSubmission={undefined}
              />
            );
          } else {
            return (
              <MessageBubble
                key={index}
                prompt={item?.content}
                supportFileSubmission={item?.supportFileSubmission}
                onNextStep={handleNextStep}
              />
            );
          }
        })}
        <div ref={conversationEndRef} />
      </ConversationContainer>
      <UserInput
        userMessage={userMessage}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleSendClick={handleSendClick}
      />
    </>
  );
};

export default Conversation;
