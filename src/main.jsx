import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvide } from "./context/authContext.jsx";
import { Provider } from "react-redux";
import RootReducer from "./components/services/reducer/Index.jsx";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: RootReducer });

// console.log("store", store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <AuthProvide> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </AuthProvide> */}
  </Provider>
);

{
  /* <StrictMode> */
}
{
  /* </StrictMode> */
}
