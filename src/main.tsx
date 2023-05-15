import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrapiProvider } from "./providers/StrapiProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StrapiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrapiProvider>
  </React.StrictMode>
);
