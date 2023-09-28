import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { AppContext, initialAppState } from "./context";
export default function AppProvider({ children }) {
    const [appContext, setAppContext] = React.useState(initialAppState);
    return (_jsx(AppContext.Provider, { value: React.useMemo(() => ({ appContext, setAppContext }), []), children: children }));
}
