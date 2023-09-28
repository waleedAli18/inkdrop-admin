import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { ChatContext, initialChatState } from "./context";
export default function ChatProvider({ children }) {
    const [chatContext, setChatContext] = React.useState(initialChatState);
    return (_jsx(ChatContext.Provider, { value: React.useMemo(() => ({ chatContext, setChatContext }), []), children: children }));
}
