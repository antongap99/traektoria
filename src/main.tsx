import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { CardContextProvider } from "./context/cards.context.tsx";
import { ModalContextProvider } from "./context/modal.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </CardContextProvider>
  </React.StrictMode>
);
