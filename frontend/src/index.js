import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//Semantic UI css-styles
import "semantic-ui-css/semantic.min.css";
import AuthProvider from "./state/contexts/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
