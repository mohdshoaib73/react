import React,{useEffect, useMemo, useState}from 'react';
import ReactDOM from 'react-dom/client';


function App() 
{
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState("");
    const [result,setResult]=useState("");
    function fib(n)
    {
        if(n<=1)
        {
            return n;
        }
    //     let a=0,b=1,c;
    //    for(let i=2;i<=n;i++)
    //    {
    //         c=a+b;
    //         a=b;
    //         b=c;
    //    }
    //    return c
    return fib(n-1)+fib(n-2);
    }
    //const result = useMemo(() => fib(number), [number]);
    //or 
    useEffect(() => {
        setResult(fib(number));
    }, [number])
    return (
        <>
        <div className='counter'>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
        <div>
            <h2>Fibonacci Number is: {result}</h2>
            <input type="number" placeholder='Enter your number' value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        </div>
        </>
    )
   
}




ReactDOM.createRoot(document.getElementById('root')).render(<App/>)