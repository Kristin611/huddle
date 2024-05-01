import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'

export const Navbar = () => {

    // const currentPage = useLocation().pathname;
    // console.log(currentPage);

  return (
   
   <nav className='nav-container'>
    <ul className='navList'>
        <li>
            <Link to='/'>Home</Link>
        </li>
    </ul>
   </nav>
   
  )
}

export default Navbar;