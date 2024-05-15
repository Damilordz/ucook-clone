// Import the React library
import React from "react";

// Define a functional component called Feature that takes in props
function Feature(props) {
 // Render the component's JSX
 return (
   // Render a div element with the class passed in as props.class
   <div className={props.class}>
     {/* Render a div element with the class passed in as props.img */}
     <div className={props.img}>
       {/* Render an image with the src and alt attributes passed in as props */}
       <img src={props.imagePath} alt={props.alt} />
     </div>

     {/* Render a heading with the text passed in as props.title */}
     <h4>{props.title}</h4>

     {/* Render a paragraph with the text passed in as props.content */}
     <p>{props.content}</p>
   </div>
 );
}

// Export the Feature component as the default export
export default Feature;