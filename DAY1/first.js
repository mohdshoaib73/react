// //create element

// const h1=document.createElement("h1");
// h1.innerText="Hello World";
// h1.style.backgroundColor="blue";
// h1.style.color="black";
// h1.style.fontSize="40px";

// const h2=document.createElement("h2");
// h2.innerText="How are uu";
// h2.style.backgroundColor="red";
// h2.style.color="white";
// h2.style.fontSize="30px";

// const root=document.getElementById("root");
// //append child in dom
// root.appendChild(h1);
// root.appendChild(h2);


//writing this much code is lenthy process to making another eolement
//ton solve this prblm we use a object named as "React" to make this process easy

const React={
    createElement:function(tag,property,childrean){
          const element=document.createElement(tag);
          if(typeof childrean==="object"){
                for(let i=0;i<childrean.length;i++){
                    element.appendChild(childrean[i]);
                }
          }else
           element.innerText=childrean;
           if(typeof property==="object"){
           for(let key in property){
                element.style[key]=property[key];
           }
        }
           return element;
    }
}

//now we will automate rendering using render object rendring means appending in dom

const ReactDOM=
{
    render:function(element,root){
        root.appendChild(element);
    }
}

const root=document.getElementById("root");
//create h1 using react
const h1=React.createElement("h1",{"backgroundColor":"blue","color":"white","fontSize":"40px"},"Hello Shoaib");
const h2=React.createElement("h2",{"backgroundColor":"red","color":"black","fontSize":"30px"},"How are uu");
const h3=React.createElement("h3","","I am fi9");
const li1=React.createElement("li","","HTML");
const li2=React.createElement("li","","CSS");
const li3=React.createElement("li","","JS");
const li4=React.createElement("li","","REACT"); 
const ul=React.createElement("ul",{},[li1,li2,li3,li4]);
// root.appendChild(h1);
// root.appendChild(h2);
// root.appendChild(h3);

ReactDOM.render(h1,root);
ReactDOM.render(h2,root);
ReactDOM.render(h3,root);
ReactDOM.render(ul,root);