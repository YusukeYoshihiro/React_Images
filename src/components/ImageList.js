import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  console.log(props);
  
  // Destructuring Assignment Shorthand 
  // It can be used as { urls } = image.urls 
  // curly braces is needed to pass { alt_description, id, urls } in map methods.
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} /> 
  });
  return <div className="image_list">{images}</div>
};

export default ImageList
