function Card(props){
    return (
        <div className='cardStyle' style={{border:"2px solid green",padding:"2px"}}>  
            <img src="https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29961765/2024/7/19/1be14d68-2b65-4e3d-948b-c5f292096d1a1721373454726-DILLINGER-Printed-Oversized-Pure-Cotton-T-shirt-610172137345-1.jpg" width="150px" height="200px"/>
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Price:{props.price}</h2>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;