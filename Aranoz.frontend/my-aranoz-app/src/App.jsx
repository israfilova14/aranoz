 
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/home/Home'
import Post from './components/pages/post/Post'
import Basket from './components/pages/basket/Basket'
import Header from './components/layout/header/Header'

function App() {
 

  return (
    <>
    <Header></Header>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path='/basket' element={<Basket/>}></Route>
   </Routes>
    </>
  )
}

export default App
