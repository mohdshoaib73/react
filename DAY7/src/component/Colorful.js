import React,{useState,useEffect} from 'react';


function Colorful()
{
    const [color,setColor]=useState("black");

    useEffect(()=>{//this executtes after all code is executed
        document.body.style.backgroundColor=color;
    },[color]);

    
    return(
        <>  
         <h1>BackGround Color Changer</h1>
         <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
         <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
         <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
         <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
         <button style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
        </>
    )
}

export default React.memo(Colorful);