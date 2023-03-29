import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";

import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import reducer from "./store/reducers";

const createsotorewithmiddleware = applyMiddleware()(configureStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createsotorewithmiddleware(reducer)}>
    <App />
  </Provider>
);
