import React from "react";
import { ChatContext, initialChatState } from "./context";
import { ChatContextStateProps } from "../interfaces";

export default function ChatProvider({ children }: any) {
  const [chatContext, setChatContext] =
    React.useState<ChatContextStateProps | null>(initialChatState);

  return (
    <ChatContext.Provider
      value={React.useMemo(() => ({ chatContext, setChatContext }), [])}
    >
      {children}
    </ChatContext.Provider>
  );
}
