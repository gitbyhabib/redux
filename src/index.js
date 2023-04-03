import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import reducer from "./store/reducers";
import promiseMiddleware from "redux-promise";

const reduxStore = configureStore({
  reducer: reducer,
  middleware: [promiseMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
