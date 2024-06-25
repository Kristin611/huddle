import React, { useState } from 'react'
import LoginModal from '../LoginModal' 
import './LoginBtn.css'

export const LoginButton = ({ setIsLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log('LoginButton - setIsLoggedIn:', setIsLoggedIn);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <button className='loginButton' onClick={handleLoginClick}>Log in</button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} setIsLoggedIn={setIsLoggedIn}/>
    </>
  )
}

export default LoginButton
