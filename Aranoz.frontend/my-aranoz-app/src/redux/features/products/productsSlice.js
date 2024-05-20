import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const  initialState= {
    products: [],
    basket: [],
    favorites: []
  }

export const getAllProducts = createAsyncThunk('products', async() => {
    const response = await axios.get('http://localhost:3000/sofa')
    console.log(response.data);
    return response.data
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        state.basket.push(action.payload)
    },
    addToFavorites: (state, action) => {
        state.favorites.push(action.payload)
    }
 
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
     
  }
})
 
export const {addToBasket, addToFavorites} = productsSlice.actions

export default productsSlice.reducer