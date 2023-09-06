import React from "react";
import data from "../Data";
import "../Location/location.css";
import { Link } from "react-router-dom";

function Location({item}) {
  return (
    <>
    <h1 className="heading fonts-2">Pick a destination</h1>
    <section className="location-section">
      
      {item.map(({ id, imgSrc, name, destination, description }) => {
        return (
          
            <div className="location-list" key={id}>
              <div>
                <Link to={`/details/${name}`}>
                  <img src={imgSrc} alt="nahargarh fort" />
                </Link>
              </div>
              <div>
                <li>
                  <Link to={`/details/${name}`}>{name}</Link>
                </li>
              </div>

            </div>
         
        );
      })}
       </section>
    </>
  );
}

export default Location;
