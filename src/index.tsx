import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const clientId = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (clientId) {
  root.render(
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={clientId}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
} else {
  alert(
    "Please set the REACT_APP_CLIENT_ID environment variable to run this app."
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
