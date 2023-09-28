import AppRoutes from "./routes/index.routes";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import "../src/assets/vendors/style";
import "./App.less";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
