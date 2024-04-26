import React from 'react'
import './Header.css'
import huddleLogo from '../../assets/Logo_2.png'


export const Header = () => {
  return (
    <>
        <section className='container'>
            <img className='logoImage' src={huddleLogo} alt='cartoon penguin'/>
            
        </section>
    </>
  )
}

// export default Header; 
