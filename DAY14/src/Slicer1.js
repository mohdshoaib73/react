import {createSlice} from "@reduxjs/toolkit";

const reactslice=createSlice({
    name:"Slice1",
    initialState:{count:0},
    reducers:{
        Increment:(state)=>{state.count+=1},
        Decrement:(state)=>{state.count-=1},
        Reset:(state)=>{state.count=0}
    }
})

export const {Increment,Decrement,Reset}=reactslice.actions;
export default reactslice.reducer;