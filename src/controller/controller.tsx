import { Message, QUESTIONS } from "../constants/questions";

export function startConversation(
  sendMessage: (message: Message) => void,
  index: number
) {
  function sendNextMessage() {
    const message = QUESTIONS[index];
    setTimeout(() => {
      sendMessage(message);
    }, 600);
  }

  sendNextMessage();
}
