import React, { useState } from 'react'
import SignUpModal from '../SignUpModal' 
import './SignupBtn.css'

const SignupBtn = ({ setIsLoggedIn }) => {

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
    <button className='signupButton' onClick={handleLoginClick}>Sign up</button>
    <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} setIsLoggedIn={setIsLoggedIn}/>
    </>
  )
}

export default SignupBtn