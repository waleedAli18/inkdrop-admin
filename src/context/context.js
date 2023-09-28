import { createContext } from "react";
export const initialChatState = {
    selectedProfile: null,
    selectedChat: null,
};
export const ChatContext = createContext({
    chatContext: initialChatState,
    selectedChat: null,
    chat: null,
});
export const initialAppState = {
    userId: null,
    email: "",
};
export const AppContext = createContext({
    appContext: initialAppState,
});
