import { jsx as _jsx } from "react/jsx-runtime";
import AppRoutes from "./routes/index.routes";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import "../src/assets/vendors/style";
import "./App.less";
function App() {
    return (_jsx(AppProvider, { children: _jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }) }));
}
export default App;
