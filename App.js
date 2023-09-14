import React from "react"
import ReactDOM from 'react-dom/client'

//React Element...
const jsxHeading=(<>
<h1 id="heading" className="header">Namste From React using JSX</h1>
                     <h2>Showing the use of multiline using Parenthesis</h2>

</>
);
//React element
const smallTitle=<h2>Hello i am small title from react elemtnt</h2>

const title=<div>
{/* ading another reacr element into another react element */}
{smallTitle}
<h1 className="title" tabIndex={5}>Hello I am Title as a react element</h1>
</div>



//React Functional Components

const Title=()=>{
        return (<h1 className="title" tabIndex={5}>Hello I am Title</h1>);
}

const HeadingComponent =()=>{

        return <div classNmae="container">
         {/* //adding react elemment */}
        {title}

        {/* //adding react component */}
        {/*different ways to add functional components*/}
        <Title></Title>
        <Title/>
        {Title()}
<h1 className="heading1">Hello From Functional Component</h1>
        </div>
}
console.log(HeadingComponent);


//console.log(jsxHeading);
const root=ReactDOM.createRoot(document.getElementById('root'));


//root.render(jsxHeading);

root.render(<HeadingComponent/>);





























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

// const parent=React.createElement("div",{id:"parent"},[
// React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am Parcel"),React.createElement("h2",{},"I am the Beast")]
// ),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am h2 tag")]
// )])



// const heading = React.createElement("h1",{id:"heading",xyz:"class"},"Hello world from React!");
//params after h1 tag are the props


        // const root =ReactDOM.createRoot(document.getElementById("root"));
/*
console.log(heading);//object->react element
console.log(root);
*/

// console.log(parent);  *************//reacElement(Object)===>>.{that creates the}==>>html (that browser understand)

        // root.render(parent);