import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginModal.css'

const LoginModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password)
        console.log(() => {'Button clicked'})

        setUsername('');
        setPassword('');

        onClose();
    }

  return (
    <>
        <Modal className='modal' isOpen={isOpen} onRequestClose={onClose} contentLabel='Login Modal'>
            {/* <h2>Enter Your Credentials:</h2> */}
            <form className='loginForm'>
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