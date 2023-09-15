import React from 'react';
import img1 from '../Assets/bg.png';
import img2 from '../Assets/jalmahal.avif';
import img3 from '../Assets/naharghar.jpg';
import { Link } from 'react-router-dom';

function LayerItems() {
  return (
    <section className="categort">
      <h1>Our category</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>
      <div className="row">
        <div className="categort_coloum">
          <Link to="/newlocation/fort">
            <img src={img1} alt="Fort" />
            <div className="layer">
              <h3>Fort</h3>
            </div>
          </Link>
        </div>
        <div className="categort_coloum">
          <Link to="/newlocation/historical">
            <img src={img2} alt="Historical" />
            <div className="layer">
              <h3>Historical</h3>
            </div>
          </Link>
        </div>
        <div className="categort_coloum">
          <Link to="/newlocation/water">
            <img src={img3} alt="Water" />
            <div className="layer">
              <h3>Water</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LayerItems;
