import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../GlobalState/store";
 

function TestReduxSubscribe() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.value);

  return (
    <div style={{ padding: "20px", border: "2px solid blue" }}>
      <h1>Shell Redux Component 2</h1>

      <button
        onClick={() =>
          dispatch(setData({ message: "Updated from Shell component 2" }))
        }
      >
        Update Redux State
      </button>

      <h3>Redux Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestReduxSubscribe;