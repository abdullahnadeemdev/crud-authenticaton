import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvide } from "./context/authContext.jsx";
import { Provider } from "react-redux";
// import store from "./store.js";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <StrictMode>
    <AuthProvide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvide>
  </StrictMode>
  // </Provider>
);
