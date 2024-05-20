import React, { useEffect } from 'react'
import "../awesome/Awesome.scss"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, addToFavorites, getAllProducts } from '../../../redux/features/products/productsSlice'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Awesome = () => {
    const {products} = useSelector(store => store.products);
    console.log(products);
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(getAllProducts())
    },[])

    const addBasketPage = (element) =>{
        dispatch(addToBasket(element))
    }

    const addFavoritesPage = (element) =>{
        dispatch(addToFavorites(element))
    }
    const deleteProduct = async(id) => {
        try{
           await axios.delete(`http://localhost:3000/sofa/${id}`)
          .then(res =>{
             console.log(res);
              if(res.status==200){
               products.filter(element => element._id !==id) 
              }
          })
        }catch(err){
         console.log(err);
        }
     }

  return (
    <div className='awesome-page'>
        <div className='awesome-title-box'>
            <h2>Awesome</h2>
            <h3>Shop</h3>
        </div>
        <div className='products-box'>
            {
                products&&products.map(item =>(
                    <div key={item._id} className='product-box'>
                        <img src={item.image} alt="" className='product-image'/>
                        <p className='product-title'>{item.title}</p>
                        <p className='product-price'>{"$"+ item.price}</p>
                         <div className='icon-and-button'>
                            <button className='add-button' onClick={() => {addBasketPage(item)}}>+ ADD TO CART </button>
                            <FavoriteBorderIcon onClick={() => {addFavoritesPage(item)}}></FavoriteBorderIcon>
                            <RemoveCircleOutlineIcon onClick={() =>{deleteProduct(item._id)}}></RemoveCircleOutlineIcon>
                         </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Awesome