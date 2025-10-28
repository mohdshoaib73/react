const element=React.createElement("h1",{},"Hello World using React");
// ReactDOM.render(element,document.getElementById("root"));
//it is react17 syntax this will not work in react18

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(element);