import React from "react"
import ReactDOM from "react-dom/client"

//const element = <h1>Hello, React!</h1>

//in JSX functions first letter must be capital
function Greet(props)
{
    return <h1>Hello {props.name} {props.age} ! How r uu</h1>
}

//calling function with help of JSX
const element=<Greet name="shoaib" age="24"/>
const reactRoot=ReactDOM.createRoot(document.getElementById("root"))

reactRoot.render(element)