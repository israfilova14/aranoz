import React from 'react'
import "../home/Home.scss"
import Landing from '../landing/Landing'
import Featured from '../featured/Featured'
import Awesome from '../awesome/Awesome'
import Bestsellers from '../../bestsellers/Bestsellers'

const Home = () => {
  return (
    <div>
        <Landing></Landing>
        <Featured></Featured>
        <Awesome></Awesome>
        <Bestsellers></Bestsellers>
    </div>
  )
}

export default Home