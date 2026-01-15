import React,{useEffect, useMemo, useState}from 'react';
import ReactDOM from 'react-dom/client';
import Increment from './Increment'
import Decrement from './Decrement'


function App() 
{
    const [count,setCount]=useState(0);// here we use state Lifting concept that is we are using state in parent component and passing it to child component as props
    return (
        <>
        <div className='counter'>
        <h1> Parent Counter is:{count}</h1>
        </div>
        <Increment counts={count} setCounts={setCount}/>
        <Decrement counts={count} setCounts={setCount}/>
        </>
    )
   
}




ReactDOM.createRoot(document.getElementById('root')).render(<App/>)