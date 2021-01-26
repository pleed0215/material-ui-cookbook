import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
