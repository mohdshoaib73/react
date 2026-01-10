import React ,{useState} from "react";
import ReactDOM from "react-dom/client";


function Counter()
{
    let [count,setCount]=useState(0);
    function IncrementNumber()
    {
        count++;
        setCount(count);
        document.querySelector("h1").innerText=`Count Is:${count}`;
        
    }
   function DecrementNumber()
   {
        count--;
        setCount(count);
        document.querySelector("h1").innerText=`Count Is:${count}`;
   }
    return(
        <div className="counter">
             <h1>Count Is:{count}</h1>

            <button onClick={IncrementNumber}>Increment {count}</button>
            <button onClick={DecrementNumber}>Decrement {count}</button>
        </div>
    )
}



const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Counter/>);

