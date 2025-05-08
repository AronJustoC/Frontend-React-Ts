import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Padre.tsx";
import CounterContextProvider from "./context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
);
