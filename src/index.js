import React from "react";
import ReactDOM from "react-dom";
import firebase from "../src/firebase/firebase";
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "./assets/css/paper-kit.min.css";
// import "./assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";
// import "./index.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("no user logged on");
  }
});
