const element=React.createElement("h1",{id:"first",className:"head",style:{backgroundColor:"pink",fontSize:"60px"}},"Hello World using React!!");
const element2=React.createElement("h2",{id:"firsts",className:"head",style:{backgroundColor:"orange",fontSize:"40px"}},`Hello ${typeof element} prople`);
// ReactDOM.render(element,document.getElementById("root"));
//it is react17 syntax this will not work in react18
const div1=React.createElement("div",{},[element,element2]);

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(div1);