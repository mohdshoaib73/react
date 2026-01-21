import { useSelector } from "react-redux"
export default function Cart()
{
    const count=useSelector((state)=>state.slice2.count);
    return(
        <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"lightgray", padding:"10px"}}>
            <h1>FoodDelivery</h1>
            <h2>Cart:({count})</h2>
        </div>
    )
}