import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginModal.css'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/api'

const LoginModal = ({ isOpen, onClose, setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // console.log('LoginModal - setIsLoggedIn:', setIsLoggedIn);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); //clear any previous error

        

        try {
            const response = await fetch(loginUser);
           
         
           
            if (response.ok) {
                // console.log('Login successful:', result);
                // navigate(`/profile/${result.user.id}`);
                // setUsername('');
                // setPassword('');
                // setIsLoggedIn(true);
                // onClose();
                 //navigate to ProfileView with user ID
                 console.log(response.url)
            } else {
                console.error('Login failed:', result.message);
                setError(result.message || 'Login failed. Please try again.')
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occured. Please try again.')
        }

        // console.log('Username:', username);
        // console.log('Password:', password)
        // console.log(() => {'Button clicked'})

        // setUsername('');
        // setPassword('');

        // onClose();
    }

  return (
    <>
        <Modal className='modal' isOpen={isOpen} onRequestClose={onClose} contentLabel='Login Modal'>
           
            <form className='loginForm'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span>Log In</span>
                <button onClick={onClose} style={{border: 'none', background: 'transparent', cursor: 'pointer'}}>X</button>
            </div>
                <h3>Username</h3>
                <input
                    value={username}
                    name="username"
                    onChange={handleUsernameChange}
                    type='text'
                    className='loginInput'
                />
                <h3>Password</h3>
                <input 
                    value={password}
                    name='password'
                    onChange={handlePasswordChange}
                    type='text'
                    className='loginInput'
                />
                <button className='loginBtn' type='submit' onClick={handleSubmit}>
                    Log in
                </button>
                
            </form>

        </Modal>
    </>
  )
}

export default LoginModal