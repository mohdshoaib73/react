import React,{useState,useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom/client';

function PasswordGenerator() {
    const [password, setPassword] = useState("uhkewuhi");
    const [length, setLength] = useState(8);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeSpecialChar, setIncludeSpecialChar] = useState(false);

    const generatePassword =useCallback(()=>{// useCallback to memoize the function means it will not recreate the function on every render
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeNumber){
            str+="0123456789";
        }
        if(includeSpecialChar){
            str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
        }
        let pass="";
        for(let i=0;i<length;i++)
        {
           pass+=str[Math.floor(Math.random()*str.length)];
        }
        setPassword(pass);
    },[length,includeNumber,includeSpecialChar]);//  means it will recreate the function only when length, includeNumber or includeSpecialChar changes

    // function generatePassword() {// it will recreate the function on every render to avoid this we use useCallback
    //     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     if(includeNumber){
    //         str+="0123456789";
    //     }
    //     if(includeSpecialChar){
    //         str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    //     }
    //     let pass="";
    //     for(let i=0;i<length;i++)
    //     {
    //        pass+=str[Math.floor(Math.random()*str.length)];
    //     }
    //     setPassword(pass);
    // }
    //generatePassword();//it will call on every render means infinite loop due to state change of password
    //To avoid this we use useEffect
    useEffect(()=>{
        generatePassword();
    },[length,includeNumber,includeSpecialChar]);//or [generatePassword]

    return(
        <>
        <h1>Password is: {password}</h1>
        <div className='second'>
            <input type="range" min={8} max={40} defaultValue={length} onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length:({length})</label>
            <input type="checkbox" defaultChecked={includeNumber} onChange={()=>{setIncludeNumber(!includeNumber)}}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked={includeSpecialChar} onChange={()=>{setIncludeSpecialChar(!includeSpecialChar)}}></input>
            <label>Special Characters</label>
        </div>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<PasswordGenerator/>);