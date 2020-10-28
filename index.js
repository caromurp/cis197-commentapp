import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";
import { render } from "react-dom";
import { createStore } from "redux";
import rootReducer from "./src/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);

// ReactDOM.render(<App />, document.getElementById("react-root"));
