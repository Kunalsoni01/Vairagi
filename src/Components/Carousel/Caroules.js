import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "../Carousel/carousel.css";
import data from "../Data";


function Caroules() {
  return (
    <>
    <div className="main">
    
      <Carousel autoplay slidesToShow={1} effect="fade" >
      
          {data.map(({id,imgSrc,name,description,destination}) => {
            return(
                <div className="carousel">
            <div className="carousel-info" key={id}>
              <Link to={`/details/${name}`}>
              <img
                style={{ width: "1100px",maxHeight:'800px',minHeight:'800px'  }}
                src={imgSrc}
                alt="img"
              />
              </Link>

              <div className="carousel-data">
                <h3>{name}</h3>
                <h4>{destination}</h4>
                <p>{description}</p>
              </div>
            </div> 
            </div>
          )
})}
       
      </Carousel>
      </div>
    </>
  );
}

export default Caroules;
