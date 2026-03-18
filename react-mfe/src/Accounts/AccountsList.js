import React, { useEffect, useState } from "react";

export default function AccountsList() {

  const [data, setData] = useState(() => {
    const existing = window.shellStore?.data;
    console.log("Initial data from shell:", existing);
    return existing || {};
  });

  useEffect(() => {

    const handler = (event) => {
      console.log("Received data update in AccountsList:", event.detail);
      setData(event.detail);
    };

    window.addEventListener("shell:data-updated", handler);

    return () => {
      window.removeEventListener("shell:data-updated", handler);
    };
  }, []);

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
        <h3>Received Data:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );    
}