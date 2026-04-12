import { store } from "./GlobalState/store";
import { setData, setUserConfig, setEventData } from "./GlobalState/store";
import { eventBus } from "./GlobalState/eventBus";

// 🔥 Ensure SINGLE INSTANCE
if (!window.__GLOBAL_REDUX_STORE__) {
  window.__GLOBAL_REDUX_STORE__ = store;
  console.log("store expose -",store)
}

// ✅ EXPORT THIS (IMPORTANT)
export const globalStore = window.__GLOBAL_REDUX_STORE__;
export { setData, setUserConfig, setEventData, eventBus };