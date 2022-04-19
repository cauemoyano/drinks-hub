import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import axe from "@axe-core/react";
import { AppProvider } from "./Context/context";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
