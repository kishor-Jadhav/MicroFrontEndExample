 
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppReactConcept from "./AppReactConcept";


// Import the shared Redux store from shell
import("shell/shellstore").then(({ globalStore }) => {
  console.log("✅ React MFE: Loaded shell store successfully", globalStore);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Provider store={globalStore}>
        <AppReactConcept />
      </Provider>
    </React.StrictMode>
  );
  
   
}).catch(err => {

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
       <AppReactConcept />
    </React.StrictMode>
  );
  
});