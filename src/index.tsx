import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import * as theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
