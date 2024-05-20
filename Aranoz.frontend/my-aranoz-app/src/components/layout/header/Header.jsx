import React from 'react'
 import "../header/Header.scss"
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
 
const Header = () => {
  return (
    
        <header>
            <div className='aranoz'>
                <h1>Aranoz.</h1>
            </div>
            <div className='links'>
                <nav>
                    <ul>
                        <li>
                        <NavLink to={'/'} style={{textDecoration: "none", color: "black"}}>Home</NavLink>
                        </li>
                        <li>Shop</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>
                            <NavLink to={'/post'} style={{textDecoration: "none", color: "black"}}>Post</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/basket'} style={{textDecoration: "none", color: "black"}}>Basket</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/wishlist'} style={{textDecoration: "none", color: "black"}}>Wishlist</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='icons'>
               <SearchIcon></SearchIcon>
               <FavoriteBorderIcon></FavoriteBorderIcon>
               <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
            </div>
            <div className='menu-icon'>
                <MenuIcon></MenuIcon>
            </div>
        </header>
    
  )
}

export default Header