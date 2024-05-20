import React from 'react'
import { useSelector } from 'react-redux';
import "../basket/Basket.scss"

const Basket = () => {
  const basket = useSelector(store => store.products.basket)
  console.log(basket);
  const {products} = useSelector(store => store.products)
  console.log(products);
  return (
    <div className='basket-products-box'>
       {
        basket.map(item => (
          <div className="basket-product-box" key={item._id}>
            <img src={item.image} alt="" className='basket-image'/>
            <div className="basket-product-box-left">
              <div className='title-and-price'>
                <p className='basket-product-title'>{item.title}</p>
                <p className='basket-item-price'>{"$" + item.price}</p>
              </div>
              <div className="color-box-container">
                <p className='color'>Color options</p>
                 <div className="color-box">
                  <div className='color-option-1'></div>
                  <div className='color-option-2'></div>
                  <div className='color-option-3'></div>
                 </div>
              </div>
            </div>
          </div>
        ))
       }
    </div>
  )
}

export default Basket