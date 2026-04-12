import React, { useState, useEffect } from "react";
import { eventBus } from "shell/shellstore";

function CustomEventListener() {
  const [eventData, setEventData] = useState(null);
  const [eventHistory, setEventHistory] = useState([]);
  const [listenerActive, setListenerActive] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("CustomEventListener: Setting up listener...");
    
    if (!eventBus) {
      console.error("❌ EventBus not available from shell");
      setError("EventBus not available");
      return;
    }

    const handleCustomEvent = (data) => {
      console.log("✅ CustomEventListener received event via EventBus:", data);
      setEventData(data);
      
      // Add to history
      setEventHistory((prev) => [
        {
          timestamp: new Date().toLocaleTimeString(),
          data,
        },
        ...prev,
      ].slice(0, 10)); // Keep last 10 events
    };

    // Listen to custom message event via EventBus
    const unsubscribe = eventBus.on("custom-message-event", handleCustomEvent);
    setListenerActive(true);
    console.log("✅ Listener registered for 'custom-message-event' via EventBus");

    return () => {
      unsubscribe();
      console.log("❌ Listener removed");
    };
  }, []);

  // Test function to manually trigger an event
  const testEvent = () => {
    if (!eventBus) {
      console.error("❌ EventBus not available");
      return;
    }
    const testData = {
      message: "Test event from react-mfe",
      timestamp: new Date().toISOString(),
      source: "react-mfe test button",
    };
    console.log("📤 Dispatching test event via EventBus:", testData);
    eventBus.emit("custom-message-event", testData);
  };

  return (
    <div style={{ padding: "20px", border: "3px solid orange", marginTop: "20px" }}>
      <h3>📩 Custom Event Listener</h3>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Listening to: <strong>custom-message-event</strong>
        <br />
        Status: {listenerActive ? "🟢 Active" : "🔴 Inactive"}
      </p>

      {error && (
        <div style={{ backgroundColor: "#ffebee", padding: "10px", marginBottom: "15px", borderLeft: "4px solid #f44336", color: "#c62828" }}>
          <strong>❌ Error:</strong> {error}
        </div>
      )}

      <button
        onClick={testEvent}
        style={{
          padding: "8px 12px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Test Event (Send to Self)
      </button>

      {/* Current Event Data */}
      <div style={{ backgroundColor: "#fff3e0", padding: "15px", borderRadius: "4px", marginBottom: "15px" }}>
        <h4>Last Event Received:</h4>
        {eventData ? (
          <pre
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderLeft: "4px solid #ff9800",
              margin: "0",
              overflow: "auto",
              fontSize: "12px",
            }}
          >
            {JSON.stringify(eventData, null, 2)}
          </pre>
        ) : (
          <p style={{ color: "#999", margin: "0" }}>Waiting for events...</p>
        )}
      </div>

      {/* Event History */}
      <div style={{ backgroundColor: "#f3e5f5", padding: "15px", borderRadius: "4px" }}>
        <h4>Recent Events ({eventHistory.length})</h4>
        <div
          style={{
            maxHeight: "150px",
            overflowY: "auto",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          {eventHistory.length > 0 ? (
            eventHistory.map((entry, index) => (
              <div
                key={index}
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #eee",
                  fontSize: "11px",
                  color: "#333",
                }}
              >
                <strong style={{ color: "#666" }}>{entry.timestamp}</strong>
                <br />
                <span style={{ color: "#999" }}>
                  {entry.data.message || JSON.stringify(entry.data).substring(0, 50)}
                </span>
              </div>
            ))
          ) : (
            <p style={{ padding: "8px", color: "#999", margin: "0" }}>No events yet...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomEventListener;
