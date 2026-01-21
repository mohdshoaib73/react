import AddItem from "./AddItem"
const items = [
    {id:1, name:"Pizza", price:200},
    {id:2, name:"Burger", price:100},
    {id:3, name:"Noodles", price:150},
    {id:4, name:"Pasta", price:180},
    {id:5, name:"Salad", price:120},
    {id:6, name:"Sushi", price:250},
    {id:7, name:"Sandwich", price:130},
    {id:8, name:"Fries", price:90},
    {id:9, name:"Ice Cream", price:80},
    {id:10, name:"Steam Momo", price:300}
]
export default function Cart()
{
    return(
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
            {
                items.map((value)=>{
                    return(
                        <div style={{border:"solid green 3px",margin:"2px", textAlign:"center",height:"250px",width:"200px"}} key={value.id}>
                           <AddItem  name={value.name} price={value.price}/>
                        </div>
                    )
                })
            }
        </div>
    )    
    
}