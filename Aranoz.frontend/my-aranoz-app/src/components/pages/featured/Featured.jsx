import React from 'react'
import "../featured/Featured.scss"
import blueSofa from "../../../assets/images/feature_1.png.webp"
import orangeSofa from "../../../assets/images/feature_2.png.webp"
import brownSofa from "../../../assets/images/feature_3.png.webp"
import yellowSofa from "../../../assets/images/feature_4.png.webp"

const Featured = () => {
  return (
    <div className='featured'>
        <h1>Featured Category</h1>
        <div className='sofas-featured'>
            <div className='sofas-featured-top'>
              <div className='blue-sofa-box'>
                <p>Premium Quality</p>
                <p className='latest'>Latest foam Sofa</p>
                <img src={blueSofa} alt="" />
            </div>
              <div className='orange-sofa-box'>
                <p>Premium Quality</p>
                <p className='latest'>Latest foam Sofa</p>
                <img src={orangeSofa} alt="" />
              </div>
          </div>
           <div className="sofas-featured-bottom">
            <div className='brown-sofa-box'>
                <p>Premium Quality</p>
                <p className='latest'>Latest foam Sofa</p>
                <img src={brownSofa} alt="" />
              </div>
              <div className='yellow-sofa-box'>
                <p>Premium Quality</p>
                <p className='latest'>Latest foam Sofa</p>
                <img src={yellowSofa} alt="" />
              </div>
           </div>
        </div>
    </div>
  )
}

export default Featured