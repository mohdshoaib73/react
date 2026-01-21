import {createSlice} from "@reduxjs/toolkit";

const reactslice=createSlice({
    name:"Slice1",
    initialState:{count:0},
    reducers:{
        Increment:(state)=>{state.count+=1},//here we are directly mutating the state object using immer library internally
        Decrement:(state)=>{state.count-=1},
        Reset:(state)=>{state.count=0},
        CustomIncrease:(state,action)=>{state.count+=action.payload}
    }
})

export const {Increment,Decrement,Reset,CustomIncrease}=reactslice.actions;
// we use actions to dispatch the actions in our components 
// actions are the functions that are used to dispatch the actions to the store it returns an action object with type(ex Slice1 its type) and payload
// it is responsible to tell the reducer what action to perform on the state and slice name is used to identify the slice of the state in the store.
export default reactslice.reducer;
//earliest we return the object

// Increment:(state)=>{
//     return{...state,count:state.count+1}// here we are not using immer library so we cannot directly mutate the state object
// } here we are returning a new object instead of mutating the existing state object. 
// because if we do only object property change it will not work as redux will not be able to identify the change in state
//  as the reference of the object remains same so we need to return a new object with updated property using spread operator. 
// But with immer library we can directly mutate the state as immer takes care of creating a new object internally.