import React from 'react'
import "../landing/Landing.scss"
import sofa from "../../../assets/images/banner_img.png.webp"

const Landing = () => {
  return (
    <div className='landing'>
        <div className='landing-left'>
            <h1>
                Wood & Cloth Sofa
            </h1>
            <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto magnam illum aliquid dolorem cumque consectetur nisi dolores sunt sapiente velit!</p>
            <div className='buy-now'>Buy Now</div>
        </div>
        <div className='landing-right'>
           <img src={sofa} alt="" className='sofa-image' />
        </div>
    </div>
  )
}

export default Landing