import React, { useState } from 'react'
import LoginModal from '../LoginModal' 

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
      <button onClick={handleLoginClick}>Login</button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </>
  )
}

export default LoginButton
