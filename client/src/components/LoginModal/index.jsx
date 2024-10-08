import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateAcctBtn from '../CreateAcctBtn/index';
import './LoginModal.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../utils/UserContext';

const LoginModal = ({ isOpen, onClose, setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUserId } = useUser();

    const apiUrl = import.meta.env.VITE_API_URL

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
            const response = await fetch(`${apiUrl}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Login successful:', result);
                setUsername('');
                setPassword('');
                setIsLoggedIn(true);
                setUserId(result.user.id); //update userId in context
                onClose();
                navigate(`/profile/${result.user.id}`); //navigate to ProfileView with user ID
            } else {
                console.error('Login failed:', result.message);
                setError(result.message || 'Login failed. Please try again.')
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occured. Please try again.')
        }

        console.log('Username:', username);
        console.log('Password:', password)
        console.log(() => {'Button clicked'})

        // setUsername('');
        // setPassword('');

        // onClose();
    }

  return (
    <>
        <Modal className='modal' isOpen={isOpen} onRequestClose={onClose} contentLabel='Login Modal'>
            {/* <h2>Enter Your Credentials:</h2> */}
            <div>
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
                <div className='create-account-btn'>
                    <CreateAcctBtn username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                </div>
            </div>
        </Modal>
    </>
  )
}

export default LoginModal