import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import "../bestsellers/Bestsellers.scss"
import { getAllProducts } from '../../redux/features/products/productsSlice';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Bestsellers = () => {
    const {products} = useSelector(store => store.products);
    console.log(products);
    const dispatch = useDispatch()
    const [slide, setSlide] = useState(0)

    useEffect(()=>{
     dispatch(getAllProducts())
    },[])

    const nextSlide = () => {
        setSlide( slide === products.length -1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? products.length -1 : slide - 1)
    }
  return (

    <div className='bestsellers-container'>
        <div className="best-sellers-title-box">
            <h2>Best Sellers</h2>
            <h3>Shop</h3>
        </div>
            <div className="carusel">
                <ChevronLeftIcon className='arrow arrow-left' onClick={prevSlide}></ChevronLeftIcon>
               {
                products.map((ele, idx) => (
                  <div className="sellers-box" key={idx} >
                      <img src={ele.image} alt=""  className={slide ===idx ? "slide": "slide slide-hidden"}/>
                  </div>
                ))
               }
               <ChevronRightIcon className='arrow arrow-right' onClick={nextSlide}></ChevronRightIcon>
            </div>
        
    </div>
  )
}

export default Bestsellers