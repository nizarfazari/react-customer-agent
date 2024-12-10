
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BubleProvider from "./context/buble.jsx";

createRoot(document.getElementById("root")).render(
  <BubleProvider>
    <App />
  </BubleProvider>
);
