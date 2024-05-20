import React, { useState } from 'react'
import "../post/Post.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productsSlice';

const Post = () => {
  const [image, setImage] = useState('')
  const [title, setTile] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  
   const addProduct = async() =>{
    try{
        const res = await axios.post("http://localhost:3000/sofa",{
          image: image,
          title: title,
          price: price
        })
        console.log(res);
        dispatch(getAllProducts)
     }catch(err){
      console.log(err);
     }
  }

  return (
    <div>
      <div className='form-container'>
        <form action="">
        <TextField id="outlined-basic-1" label="Image URL" variant="outlined" value={image} onChange={e => setImage(e.target.value)}/>
        <TextField id="outlined-basic-2" label="Title" variant="outlined"  value={title} onChange={e => setTile(e.target.value)}/>
        <TextField id="outlined-basic-3" label="Price" variant="outlined" value={price} onChange={e => setPrice(e.target.value)}/>
        <Button variant="outlined" type='submit' onClick={addProduct}>Add Product</Button>
        </form>
      </div>
    </div>
  )
}

export default Post