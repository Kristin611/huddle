import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import MyProfile from '../MyProfileBtn/index';


export const Navbar = ({ isLoggedIn }) => {

    // const currentPage = useLocation().pathname;
    // console.log(currentPage);

  return (
   
   <nav className='nav-container'>
    <ul className='navList'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <MyProfile isLoggedIn={isLoggedIn}/>
        </li>
    </ul>
   </nav>
   
  )
}

export default Navbar;