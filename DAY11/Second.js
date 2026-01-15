import Third from "./Third";
import { GlobalContext } from "./src/Global";
import { useContext } from "react";
function Second() {
    const {count,setCount}= useContext(GlobalContext);
    return(
        <>
        <h2>This is the Second Component</h2>
        <Third/>
        </>
    )
}
export default Second;