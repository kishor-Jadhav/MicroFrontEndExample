import React, { useState, useEffect } from "react";
import { eventBus } from "../GlobalState/eventBus";

function CustomEventExample() {
  const [receivedData, setReceivedData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [eventLog, setEventLog] = useState([]);

  // Listen to custom events on component mount
  useEffect(() => {
    const handleCustomEvent = (data) => {
      console.log("Shell receivedCustomEvent:", data);
      setReceivedData(data);
      setEventLog((prev) => [
        ...prev,
        {
          timestamp: new Date().toLocaleTimeString(),
          data,
        },
      ]);
    };

    // Register listener
    const unsubscribe = eventBus.on("custom-message-event", handleCustomEvent);

    // Cleanup listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Dispatch custom event
  const dispatchCustomEvent = (message) => {
    const eventData = {
      message,
      timestamp: new Date().toISOString(),
      source: "CustomEventExample Component",
    };

    console.log("📤 Dispatching custom-message-event via EventBus:", eventData);
    eventBus.emit("custom-message-event", eventData);
    console.log("✅ Event emitted successfully");

    setInputValue(""); // Clear input
  };

  // Dispatch to other MFE
  const dispatchToOtherMFE = (message) => {
    const eventData = {
      message,
      timestamp: new Date().toISOString(),
      fromComponent: "CustomEventExample",
    };

    console.log("📤 Dispatching shell:notify-other-mfe via EventBus:", eventData);
    eventBus.emit("shell:notify-other-mfe", eventData);

    setInputValue("");
  };

  return (
    <div style={{ padding: "20px", border: "3px solid purple" }}>
      <h2>Custom Event Example 🎯</h2>

      {/* Input and Dispatch Buttons */}
      <div style={{ marginBottom: "20px", backgroundColor: "#f0f0f0", padding: "15px" }}>
        <h3>Dispatch Events</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter message..."
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "200px",
            fontSize: "14px",
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatchCustomEvent(inputValue);
            }
          }}
        />

        <button
          onClick={() => dispatchCustomEvent(inputValue || "Hello from Custom Event!")}
          style={{
            padding: "8px 16px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send Event
        </button>

        <button
          onClick={() => dispatchToOtherMFE(inputValue || "Message for Other MFE")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send to Other MFE
        </button>
      </div>

      {/* Received Data Display */}
      <div style={{ marginBottom: "20px", backgroundColor: "#e8f5e9", padding: "15px" }}>
        <h3>Last Received Data</h3>
        {receivedData ? (
          <pre
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderLeft: "4px solid #4CAF50",
            }}
          >
            {JSON.stringify(receivedData, null, 2)}
          </pre>
        ) : (
          <p style={{ color: "#999" }}>No events received yet...</p>
        )}
      </div>

      {/* Event Log */}
      <div style={{ backgroundColor: "#fff3e0", padding: "15px" }}>
        <h3>Event Log ({eventLog.length})</h3>
        <div
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          {eventLog.length > 0 ? (
            eventLog.map((log, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                  fontSize: "12px",
                }}
              >
                <strong>{log.timestamp}</strong>: {JSON.stringify(log.data)}
              </div>
            ))
          ) : (
            <p style={{ padding: "10px", color: "#999" }}>No events logged yet...</p>
          )}
        </div>
      </div>

      {/* Code Example */}
      <div style={{ marginTop: "20px", backgroundColor: "#f5f5f5", padding: "15px" }}>
        <h3>Code Example</h3>
        <pre
          style={{
            backgroundColor: "#333",
            color: "#0f0",
            padding: "10px",
            borderRadius: "4px",
            overflow: "auto",
            fontSize: "12px",
          }}
        >
{`// Dispatch a custom event
window.dispatchEvent(
  new CustomEvent("event-name", {
    detail: { 
      message: "Hello",
      data: "any data here"
    }
  })
);

// Listen to custom event
const listener = (event) => {
  console.log(event.detail);
};

window.addEventListener("event-name", listener);

// Cleanup
window.removeEventListener("event-name", listener);`}
        </pre>
      </div>
    </div>
  );
}

export default CustomEventExample;
