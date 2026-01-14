import Resct ,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import Body from "./component/Body";


function Main(){

    return(

        <>
        <Header/>
        <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);