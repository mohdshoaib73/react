import {createSlice} from "@reduxjs/toolkit";

const Slice2=createSlice({
    name:"slice2",
    initialState:{count:0},
    reducers:{
        addItemss:(state)=>{
            state.count+=1;
        },
        removeItemss:(state)=>{
            state.count-=1;
        }
    }
})

export const {addItemss, removeItemss}=Slice2.actions;
export default Slice2.reducer;