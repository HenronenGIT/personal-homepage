import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <GlobalStyles styles={} /> */}
    {/* <GlobalStyles /> */}
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
