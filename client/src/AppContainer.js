import * as React from "react";
import "./app.css";
import ChatContainer from "./components/chat-container";
import { Message } from "./components/message";
import { messengerTypes } from "./constants";

export const AppContainer = () => {
  const mockBotMessage = {
    messengerType: messengerTypes.bot,
    message: "Hi I am a bot",
    date: new Date(),
  };

  const mockUserMessage = {
    messengerType: messengerTypes.user,
    message: "Hi I am a user",
    date: new Date(),
  };
  return (
    <>
      <ChatContainer />
      <br />
      <br />
      <br />
      <br />
      <Message messageData={mockBotMessage} />
      <Message messageData={mockUserMessage} />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AppContainer;
