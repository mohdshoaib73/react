import React, { useState }from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Card from './component/Card';
import arr from './utils/Dummy';

function App(){
    let [A,setA]=React.useState(arr);

    function sortArray()
    {
        A.sort((a,b)=>a.price-b.price);
        setA([...A]);//make a new array to trigger re-render means make clone of existing array
        console.log(A);
    }
    function filterByPrice499()
    {
        let filteredArr=arr.filter((item)=>item.price>499);
        setA(filteredArr);
    }
    return(
        <>
        <Header/>
        <button onClick={sortArray} className='sort'>Sort By Price</button>
        <button onClick={filterByPrice499} className='sort'>Filter Price above 499</button>
         <div className='card' style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
            {
            A.map((item,index)=><Card key={index} cloth={item.cloth} offer={item.offer} price={item.price}/>)
            }
         </div>
        </>
    )
}
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);