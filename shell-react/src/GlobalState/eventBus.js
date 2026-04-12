// Shared event bus for cross-MFE communication
class EventBus {
  constructor() {
    this.listeners = {};
    console.log("🚌 EventBus initialized");
  }

  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
    console.log(`📍 Listener registered for: ${eventName}`, { totalListeners: this.listeners[eventName].length });
    
    return () => {
      this.off(eventName, callback);
    };
  }

  off(eventName, callback) {
    if (!this.listeners[eventName]) return;
    this.listeners[eventName] = this.listeners[eventName].filter(cb => cb !== callback);
    console.log(`📍 Listener removed for: ${eventName}`);
  }

  emit(eventName, data) {
    console.log(`📤 EventBus emitting: ${eventName}`, data);
    if (!this.listeners[eventName]) {
      console.warn(`⚠️ No listeners for event: ${eventName}`);
      return;
    }
    this.listeners[eventName].forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error(`❌ Error in listener for ${eventName}:`, error);
      }
    });
  }

  // Also dispatch as window event for legacy support
  emitGlobal(eventName, data) {
    this.emit(eventName, data);
    window.dispatchEvent(
      new CustomEvent(eventName, { detail: data })
    );
  }

  getListeners(eventName) {
    return this.listeners[eventName] ? this.listeners[eventName].length : 0;
  }
}

// Create singleton instance
if (!window.__SHARED_EVENT_BUS__) {
  window.__SHARED_EVENT_BUS__ = new EventBus();
}

export const eventBus = window.__SHARED_EVENT_BUS__;
