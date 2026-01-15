import React,{useEffect, useMemo, useState}from 'react';
import ReactDOM from 'react-dom/client';
import Second from './Second'
import { GlobalContext } from "./src/Global";
import { useContext } from "react";


function App() 
{
    const [count,setCount]=useState(0);
    return (
        <>
        <GlobalContext.Provider value={{count,setCount}}>
        <div className='counter'>
        <h1>This is the First We will call Second in it</h1>
        <Second count={count} setCount={setCount}/>
        </div>
        </GlobalContext.Provider>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>)