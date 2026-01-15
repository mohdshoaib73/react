
function Increment({counts,setCounts}) {
    return(
        <>
        <h2>Child Counter is:{counts*2}</h2>
        <button onClick={()=>{setCounts(counts+1)}}>Increment</button>
        </>
    )
}

export default Increment;