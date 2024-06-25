import React, { useState } from 'react';
import Modal from 'react-modal';
import './SignupModal.css'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../utils/api'

const SignUpModal = ({ isOpen, onClose, setIsLoggedIn }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(createUser);
             console.log(response)
            const result = await response.json();

            if (response.ok) {
                console.log('Signup successful:', result);
                setUsername('');
                setPassword('');
                setIsLoggedIn(true);
                onClose();
                navigate(`/profile/${result.user.id}`); //navigate to ProfileView with user ID
            } else {
                console.error('Signup failed:', result.message);
                setError(result.message || 'signup failed. Please try again.')
            }
        } catch (error) {
            console.error('Signup error:', error);
            setError('An error occured. Please try again.')
        }

    }
  return (
    <>
     <Modal className='modal' isOpen={isOpen} onRequestClose={onClose} contentLabel='Login Modal'>
           
           <form className='SignupForm'>
           <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <span>Sign Up</span>
               <button onClick={onClose} style={{border: 'none', background: 'transparent', cursor: 'pointer'}}>X</button>
           </div>
               <h3>Username</h3>
               <input
                   value={username}
                   name="username"
                   onChange={handleUsernameChange}
                   type='text'
                   className='signupInput'
               />
               <h3>Password</h3>
               <input 
                   value={password}
                   name='password'
                   onChange={handlePasswordChange}
                   type='text'
                   className='signupInput'
               />
               <button className='signupBtn' type='submit' onClick={handleSubmit}>
                   Log in
               </button>
               
           </form>

       </Modal>
    </>
  )
}

export default SignUpModal