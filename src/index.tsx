import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import axe from "@axe-core/react";
import { AppProvider } from "./Context/context";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
