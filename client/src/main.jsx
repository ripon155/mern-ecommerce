import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
