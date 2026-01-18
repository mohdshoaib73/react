import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Stores";
import Counting from "./Counting";

function App() {
    return(
       
            <Provider store={store}>
                <Counting/>
            </Provider>
       
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);