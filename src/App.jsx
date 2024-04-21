// Styles
import "./App.css";

// Routes
import AppRoutes from "./AppRoutes";

// Context
import { Provider } from "./context/Context";

function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}

export default App;
