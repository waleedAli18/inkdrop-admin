import { createContext } from "react";
import {
  AppContextProps,
  AppContextStateProps,
  ChatContextProps,
  ChatContextStateProps,
} from "../interfaces";

export const initialChatState: ChatContextStateProps = {
  selectedProfile: null,
  selectedChat: null,
};

export const ChatContext = createContext<ChatContextProps>({
  chatContext: initialChatState,
  selectedChat: null,
  chat: null,
});

export const initialAppState: AppContextStateProps = {
  userId: null,
  email: "",
};

export const AppContext = createContext<AppContextProps>({
  appContext: initialAppState,
});
