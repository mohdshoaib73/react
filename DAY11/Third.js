import { GlobalContext } from "./src/Global";
import { useContext } from "react";
function Third() {
    const {count,setCount}= useContext(GlobalContext);
    return(
        <>
        <h1>{count}</h1>
        <h3>This is the Third Component count is: {count}</h3>
        <button onClick={()=>{setCount(count+10)}}>Add 10 in Count</button>
        </>
    )
}

export default Third;   