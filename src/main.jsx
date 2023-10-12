import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>
          {/* <CartProvider> */}
            <App />
          {/* </CartProvider> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
