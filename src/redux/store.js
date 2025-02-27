// store.js
import { createStore } from "redux";
import { userReducer } from "./useReducer";

const store = createStore(userReducer);

export default store;
