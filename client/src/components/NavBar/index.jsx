import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import MyProfile from '../MyProfileBtn/index';


export const Navbar = ({ isLoggedIn }) => {

    //const currentPage = useLocation().pathname;
    // console.log(currentPage);

  return (
   
   <nav className='nav-container'>
    <ul className='navList'>
        <li>
            <Link to='/'>Huddle</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
    </ul>
   </nav>
   
  )
}

export default Navbar;