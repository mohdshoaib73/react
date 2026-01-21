import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Header.js";
import Cart from "./Cart.js";
import store from "./FoodStored.js";
import { Provider } from "react-redux";

function App() {
    return(
        <Provider store={store}>
        <Header/>
        <Cart/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);