import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

// Import the shared Redux store from shell
import("shell/shellEvent").then(({ globalStore }) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Provider store={globalStore}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}).catch(err => {
  console.error("Failed to load shell store:", err);
  // Fallback if shell store is not available
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});