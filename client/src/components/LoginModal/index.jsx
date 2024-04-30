import React, { useState } from 'react';
import Modal from 'react-modal';

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

        onClose();
    }

  return (
    <>
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={username}
                    name="username"
                    onChange={handleUsernameChange}
                    type='text'
                    placeholder='Username'
                />
                <input 
                    value={password}
                    name='password'
                    onChange={handlePasswordChange}
                    type='text'
                    placeholder='Password'
                />
                <button type='submit'>
                    Submit
                </button>
                
            </form>

        </Modal>
    </>
  )
}

export default LoginModal