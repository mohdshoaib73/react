import React,{useEffect, useMemo, useState,useRef}from 'react';
import ReactDOM from 'react-dom/client';


// function Second() 
// {
//     const [count,setCount]=useState(0);
//    // let money=0;// on re-rendring this value has been lost . To solve this we will use the useRef hook
//     const money=useRef(0);//return an object with current property acess the value using money.current
//    // console.log(money.current);
//     return (
//         <>
//         <div className='counter'>
//         <h1>Counter is:{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//         </div>
//         <div>
//             <h2>Money is:{money.current}</h2>
//             <button onClick={()=>{money.current=money.current+1
//                 console.log(money.current)
//             }}>Add Money</button>
//         </div>
//         </>
//     )
   
// }

function Stopwatch()
{
    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const id=useRef(null);// ye ek object return karega jiska current property me hum initial interval id store karenge aur use karenge clearInterval me
    
    function start()
    {
        if(!isRunning)
       { 
        id.current = setInterval(()=>{// store the initial interval id in the current property of the ref object
            setTime((prevTime)=>prevTime+1)//it has also a closure problem so we will use the function form of state update means pass a function to the setTime 
        },1000)
        setIsRunning(true);
      }
    }
    function stop()
    {
        if(isRunning)
        {
        clearInterval(id.current);// for stop the wathc
        id.current=null;
        setIsRunning(false);
        }
    }
    function reset()
    {
        clearInterval(id.current);
        id.current=null;
        setTime(0);
        setIsRunning(false)
    }
    return(
        <>
        <h1>Time is:{time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>)