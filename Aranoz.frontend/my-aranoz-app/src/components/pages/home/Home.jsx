import React from 'react'
import "../home/Home.scss"
import Landing from '../landing/Landing'
import Featured from '../featured/Featured'

const Home = () => {
  return (
    <div>
        <Landing></Landing>
        <Featured></Featured>
    </div>
  )
}

export default Home