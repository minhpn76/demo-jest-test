import React from 'react'
import ReactDOM from "react-dom";
import Root from "Root";

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  rootElement
);
