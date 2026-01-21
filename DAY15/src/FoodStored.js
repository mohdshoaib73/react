import { configureStore } from "@reduxjs/toolkit";

import Slice2Reducer from "./Slice2";

const store=configureStore({
    reducer:{
        slice2:Slice2Reducer
    }
})
export default store;