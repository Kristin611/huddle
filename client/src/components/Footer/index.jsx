import React from 'react';
import './Footer.css';
import huddleLogo from '../../assets/Logo_2.png';

const Footer = () => {
  return (
    <>
        <footer>
            <div className='footer-container'>
                <div>
                    <p>&copy; 2024 Huddle. All rights reserved.</p>
                </div>
                <div>
                    <img className='footer-logo' src={huddleLogo} alt="cartoon penguin"/>
                </div>  
            </div>
        </footer>
    </>
  )
}

export default Footer