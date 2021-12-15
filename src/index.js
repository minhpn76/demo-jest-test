import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "reducers";

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
