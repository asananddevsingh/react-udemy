import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// It will thwor error once the request is fail, such as no internet connection.
axios.interceptors.request.use(
  request => {
    console.log("[index.js] request: ", request);
    // You can edit the request config here.
    return request;
  },
  error => {
    console.log("[index.js] request error: ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log("[index.js] response: ", response);
    // You can edit the response config here.
    return response;
  },
  error => {
    console.log("[index.js] response error: ", error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
