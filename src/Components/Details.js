import React from 'react'
import data from './Data'

import { useParams } from 'react-router-dom'




function Details() {
    
    
    const { name } = useParams();
    const selectedData = data.find(item => item.name === name);
  
    if (!selectedData) {
      return <div>Data not found.</div>;
    }
  
    const { imgSrc, destination, description } = selectedData;
  
    return (
      <div>
        <img src={imgSrc} alt="img" />
        <h2>{name}</h2>
        <h5>{destination}</h5>
        <p>{description}</p>
      </div>
    );
  }

export default Details