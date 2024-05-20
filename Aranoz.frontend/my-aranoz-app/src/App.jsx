 
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/home/Home'
import Post from './components/pages/post/Post'
import Basket from './components/pages/basket/Basket'
import Header from './components/layout/header/Header'
import Wishlist from './components/pages/wishlist/Wishlist'

function App() {
 

  return (
    <>
    <Header></Header>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path='/basket' element={<Basket/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
   </Routes>
    </>
  )
}

export default App
