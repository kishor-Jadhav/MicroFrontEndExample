import React from "react";

const ReactComponent = ({ message }) => {

  return (
    <div style={{border:"2px solid green",padding:"20px"}}>
      <h2>React Microfrontend Component</h2>
      <p>{message}</p>
    </div>
  );

};

export default ReactComponent;