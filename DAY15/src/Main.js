import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Stores";
import Counting from "./Counting";
import CustomInc from "./CustomInc";

function App() {
    return(
       
            <Provider store={store}>
                <Counting/>
                <br/>
                <br/>
                <CustomInc/>
            </Provider>
       
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);