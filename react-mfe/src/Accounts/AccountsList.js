import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocalStore } from "../AppContexts/DataProvider";

export default function AccountsList() {
  const { loginConfig } = useLocalStore(); //Local state from DataProvider context
  const data = useSelector((state) => state.data.value);

  const navigateToReact = () => {
    window.dispatchEvent(
      new CustomEvent('shell:navigate', {
        detail: { path: '/angular/productlist' }
      })
    );
  }

  return (
    <>
      <div style={{border:"2px solid blue",padding:"20px"}}>
        <h1>Accounts List Microfrontend App</h1>
        <button onClick={navigateToReact}>
          Go to Angular Page
        </button>
      </div>

      <div style={{ border: "2px solid green", padding: "20px" }}>
        <h3>Received Data from Redux Store:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div style={{ border: "2px solid green", padding: "20px" }}>
        <h3>Login Data Context:</h3>
        <pre>{JSON.stringify(loginConfig, null, 2)}</pre>
      </div>
    </>
  );    
}