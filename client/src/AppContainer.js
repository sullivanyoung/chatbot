import * as React from "react";
import "./app.css";
import ChatContainer from "./components/chat-container";

export const AppContainer = () => {
  return (
  <><ChatContainer /><span className="bg-green">hello world</span></>
  );
};

export default AppContainer;
