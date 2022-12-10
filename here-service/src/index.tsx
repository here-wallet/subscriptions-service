import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./selector";
import { App } from "./App";

import "./assets/cabinet-grotesk/index.css";
import "./assets/manrope/index.css";
import "./assets/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
