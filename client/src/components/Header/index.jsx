import React from 'react'
import './Header.css'
import huddleLogo from '../../assets/Logo_2.png'
import LoginButton from '../LoginBtn'


export const Header = () => {
  return (
    <>
        <section className='container'>
              <img className='logoImage' src={huddleLogo} alt='cartoon penguin'/>
              <div className='spacer'></div>
              <LoginButton />  
        </section>
    </>
  )
}

// export default Header; 
