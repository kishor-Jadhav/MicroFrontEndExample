import React from "react";
import { useNavigate } from "react-router-dom";
 

export default function TestRedux() {
    const navigate = useNavigate();
    const navigateToComponent1 = () => {
       navigate("/redux-component-1");
      }
  return (
    <div>
      <h1>Shell Redux Test</h1>
      <button onClick={() => navigateToComponent1()}>
        Go to Component 1
      </button>
        <button onClick={() => navigate("/redux-component-2")}> Go to Component 2</button>
    </div>)
    }