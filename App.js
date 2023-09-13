import React from "react"
import ReactDOM from 'react-dom/client'

/*
<div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am h2 tag</h2>

    </div>
     <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am h2 tag</h2>

    </div>
</div>
*/

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am Parcel"),React.createElement("h2",{},"I am the Beast")]
),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am h2 tag")]
)])
// const heading = React.createElement("h1",{id:"heading",xyz:"class"},"Hello world from React!");
//params after h1 tag are the props


        const root =ReactDOM.createRoot(document.getElementById("root"));
/*
console.log(heading);//object->react element
console.log(root);
*/

console.log(parent);//reacElement(Object)===>>.{that creates the}==>>html (that browser understand)

        root.render(parent);