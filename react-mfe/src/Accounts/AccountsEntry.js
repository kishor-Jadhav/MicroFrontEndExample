import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "shell/shellstore";

export default function AccountsEntry() {

  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>React MFE</h2>

      <button
        onClick={() =>
          dispatch(setData({ source: "React MFE" }))
        }
      >
        Update Data
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}