import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomIncrease } from "./Slicer1";

export default function CustomInc(){
    const [number,setNumber]=useState("");
    const dispatch=useDispatch();
    function handleClick(){
        dispatch(CustomIncrease(Number(number)));
        setNumber("");
    }
    return(
    <>
    <input type="number" placeholder="Enter the number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={handleClick}>submit</button>
    </>
    )
}