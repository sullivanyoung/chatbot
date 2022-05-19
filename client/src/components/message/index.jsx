import React from "react";
import { messengerTypes } from "../../constants/index";

export const Message = ({ messageData }) => {
  const flexContainerClasses = `flex ${
    messageData.messengerType === messengerTypes.bot
      ? "justify-end"
      : "justify-start"
  }`;
  const messageStyleClasses = `flex p-10 ${
    messageData.messengerType === messengerTypes.bot ? "bg-grey" : "bg-green"
  }`;
  return (
    <>
      <div className={flexContainerClasses}>
        <div className="block">
          <div className={messageStyleClasses}>
            <p>{messageData.message}</p>
          </div>
          <p className="text-8">{messageData.date.toString()}</p>
        </div>
      </div>
    </>
  );
};
