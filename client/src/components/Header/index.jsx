import React from 'react'
import './Header.css'
import huddleLogo from '../../assets/Logo_2.png';
import LoginButton from '../LoginBtn';
import LogoutButton from '../LogoutBtn';


export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

  // console.log('Header - isLoggedIn:', isLoggedIn);
  // console.log('Header - setIsLoggedIn:', setIsLoggedIn);
  
  return (
    <>
        <section className='container'>
              <img className='logoImage' src={huddleLogo} alt='cartoon penguin'/>
              <div className='spacer'></div>
              {isLoggedIn ? (
                <LogoutButton setIsLoggedIn={setIsLoggedIn}/> 
              ) : (
                <LoginButton setIsLoggedIn={setIsLoggedIn}/>
              )}   
        </section>
    </>
  )
}

// export default Header; 
