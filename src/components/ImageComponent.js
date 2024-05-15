// Import the React library
import React from 'react';

// Define a functional component called ImageComponent
function ImageComponent({ imagePath, alt, className }) {
 // Render an <img> element with the provided props
 return <img src={imagePath} alt={alt} className={className} />;
}

// Export the ImageComponent as the default export
export default ImageComponent;