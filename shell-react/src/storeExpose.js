import { store } from "./GlobalState/store";
import { setData } from "./GlobalState/store";

// 🔥 Ensure SINGLE INSTANCE
if (!window.__GLOBAL_REDUX_STORE__) {
  window.__GLOBAL_REDUX_STORE__ = store;
}

// ✅ EXPORT THIS (IMPORTANT)
export const globalStore = window.__GLOBAL_REDUX_STORE__;
export { setData };