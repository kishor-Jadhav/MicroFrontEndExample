 import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./GlobalState/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
}

// ✅ for Angular MFE
window.store = store;