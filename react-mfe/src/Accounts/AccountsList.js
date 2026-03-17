import React from "react";

export default function AccountsList() {
const navigateToReact = () => {
  window.dispatchEvent(
    new CustomEvent('shell:navigate', {
      detail: { path: '/angular/productlist' }
    })
  );
}
  return (
    <div style={{border:"2px solid blue",padding:"20px"}}>
      <h1>Accounts List Microfrontend App</h1>
      <button onClick={navigateToReact}>
        Go to Angular Page
      </button>
    </div>
  );    
}