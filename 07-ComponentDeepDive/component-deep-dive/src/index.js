import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
// import MyApp from "./playground/container/MyApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App appTitle="Person Manager" />,
  document.getElementById("root")
);

// ReactDOM.render(
//     <MyApp appTitle="Welcome to Playground" />,
//     document.getElementById("root")
//   );

registerServiceWorker();
