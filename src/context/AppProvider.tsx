import React from "react";
import { AppContext, initialAppState } from "./context";
import { AppContextStateProps } from "../interfaces";

export default function AppProvider({ children }: any) {
  const [appContext, setAppContext] =
    React.useState<AppContextStateProps | null>(initialAppState);

  return (
    <AppContext.Provider
      value={React.useMemo(() => ({ appContext, setAppContext }), [])}
    >
      {children}
    </AppContext.Provider>
  );
}
