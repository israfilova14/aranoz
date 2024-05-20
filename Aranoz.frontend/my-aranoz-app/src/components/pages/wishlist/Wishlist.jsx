import React, { useState } from 'react'
import "../wishlist/Wishlist.scss"
import { useSelector } from 'react-redux'

const Wishlist = () => {
    const favorites = useSelector(store => store.products.favorites)
    console.log(favorites);
    const {products} = useSelector(store => store.products)
    console.log(products);
    const [count, setCount] = useState(0)
    const decrement = () =>{
       if(count >0 ){
        setCount( count - 1 )
       }else{
        alert("amount must be a positive number")
       }
    }
    const increment = () =>{
        setCount(count + 1)
    }
 
  return (
    <div>
        <div className="favorites-products-box">
            {
                favorites.map(item => (
                    <div className="favorites-product-box" key={item._id}>
                        <img src={item.image} alt=""  className='favorites-image'/>
                     <div className="favorites-product-box-left">
                        <div className='title-and-price'>
                            <p className='favorites-product-title'>{item.title}</p>
                            <p className='favorites-item-price'>{"$" + item.price}</p>
                        </div>
                        <div className="count-box-container">
                             <button className='inc-btn' onClick={increment} >INC</button>
                             <span>Count: {count}</span>
                             <button className='dec-btn' onClick={decrement}>DEC</button>
                        </div>
                     </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Wishlist