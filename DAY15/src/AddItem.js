import { useState } from "react"
import { useDispatch } from "react-redux";
import {addItemss, removeItemss} from "./Slice2.js";


export default function AddItem(value)
{
    const [click, setClick] = useState(false);
    const dispatch=useDispatch();
    function handleClick()
    {
        if(click===false)
        {
            setClick(true);
            dispatch(addItemss());
        }
        else
        {
            setClick(false);
            dispatch(removeItemss());
        }
    }
    return(
        <>
        <h1>{value.name}</h1>
        <h2>Price: {value.price}</h2>
        <button onClick={handleClick}>{click ? "Remove":"Add"}</button>
        </>
    )
}