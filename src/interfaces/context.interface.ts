export interface ChatContextStateProps {
  selectedProfile: {} | null;
  selectedChat: {} | null;
}

export interface ChatContextProps {
  chatContext: ChatContextStateProps | null;
  setChatContext?: (chatContext: ChatContextStateProps | null) => void;
  selectedChat?: {} | null;
  chat?: any;
  setChat?: any;
}

export interface AppContextStateProps {
  userId: number | null;
  email: string;
}

export interface AppContextProps {
  appContext: AppContextStateProps | null;
  setAppContext?: (appContext: AppContextStateProps | null) => void;
}
