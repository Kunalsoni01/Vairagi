import React from "react";
import "../pages/home.css";
import { Link } from 'react-router-dom'
import Layer from "../Components/Layer/Layer";



const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="containt fonts">
            <h1>Jaipur</h1>
            <span className="city">The Pink City</span>
            <div className="main-text">
              <h3>
                <span>E</span>xplore its diverse cultures its diverse and
                enchanting landscapes
              </h3>
            </div>
            <Link to="/location">
            <button className="hero-btn">Explore Now</button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* secound section................ */}
      <Layer/>
    </>
  );
};

export default Home;
