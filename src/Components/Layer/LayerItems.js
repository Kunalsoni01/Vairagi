import React from 'react'
import data from '../Data'

import img1 from '../Assets/bg.png'
import img2 from '../Assets/jalmahal.avif'
import img3 from  '../Assets/naharghar.jpg'
import { Link } from 'react-router-dom'



function LayerItems({FilterMenu}) {
    
  return (
    <>
    <section className="categort">
        <h1>our categort </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>

        {
            // catItem.map((ele)=>{
            //     return(
                    <div className="row"  >
                      
                      
                    <div onClick={()=> FilterMenu('fort')} className="categort_coloum">
                    <Link to={`/newlocation`}>
                        <img  src={img1}/>
                        <div className="layer">
                            <h3>fort</h3>
                        </div>
                        </Link>
                    </div>

                   
                    <div onClick={()=> FilterMenu('historical')} className="categort_coloum">
                        <img  src={img2}/>
                        <div className="layer">
                            <h3>historical</h3>
                        </div>
                    </div>
                    <div onClick={()=> FilterMenu('water')} className="categort_coloum">
                        <img  src={img3}/>
                        <div className="layer">
                            <h3>water</h3>
                        </div>
                    </div>
                    </div>
            //     )
            // })
        }

{/* {data.map(({ id, imgSrc, category }) => {
        return (
          
            <div className="row" key={id}>
                <Link to={`/location/${category}`}>
              <div className="categort_coloum">
                
                  <img src={imgSrc} alt="nahargarh fort" />
                
                <div className="layer">
                            <h3>{category}</h3>
                        </div>
                </div>
                </Link>
                        
                  </div>
         
        );
      })} */}


    </section>


    </>
  )
}

export default LayerItems