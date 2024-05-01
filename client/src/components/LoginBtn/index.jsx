import React, { useState } from 'react'
import LoginModal from '../LoginModal' 
import './LoginBtn.css'

export const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <button className='loginButton' onClick={handleLoginClick}>Log in</button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </>
  )
}

export default LoginButton
