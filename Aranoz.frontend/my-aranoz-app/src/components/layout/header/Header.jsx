import React from 'react'
 import "../header/Header.scss"
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
 
const Header = () => {
  return (
    
        <header>
            <div className='aranoz'>
                <h2>Aranoz.</h2>
            </div>
            <div className='links'>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>
                            Shop
                            <select name="Shop" id="">
                               <option value="">Shop Category</option>
                               <option value="">Product Category</option>
                            </select>
                        </li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>
                            <NavLink to={'/post'} style={{textDecoration: "none", color: "black"}}>Post</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/basket'} style={{textDecoration: "none", color: "black"}}>Basket</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='icons'>
               <SearchIcon></SearchIcon>
               <FavoriteBorderIcon></FavoriteBorderIcon>
               <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
            </div>
        </header>
    
  )
}

export default Header