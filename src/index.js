import React, { StrictMode } from 'react'
import ReactDOM from "react-dom";
import Root from "Root";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  </StrictMode>,
  rootElement
);
