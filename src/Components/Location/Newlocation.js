import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Location from './Location';
import data from '../Data';

function Newlocation() {
  const { category } = useParams(); // Get the category from URL parameter
  const [item, setItem] = useState([]);

  useEffect(() => {
    // Filter data based on the selected category
    const updatedItem = data.filter((CurrEle) => {
      return CurrEle.category === category;
    });

    // Update the item state with the filtered data
    setItem(updatedItem);
  }, [category]);

  return (
    <div>
      <h1>{category} Locations</h1>
      <Location item={item} />
    </div>
  );
}

export default Newlocation;
