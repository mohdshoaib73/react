import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./component/Colorful";


function Main()
{
    const [count,setCount]=useState(0);
   return( <>
            <div className="counter">   
                <h1>Counter Is:{count}</h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setCount(count-1)}>Decrement</button>
            </div>
          
            <Colorful/>
           </>
    )
}

const reactRoot=ReactDOM.createRoot(document.getElementById("root"))

reactRoot.render(<Main/>)