import React, { useState } from 'react';
import './CreateAcctBtn.css';
import { useNavigate, useParams } from 'react-router-dom';


const CreateAcct = ({username, password, setUsername, setPassword }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            })

            const result = await response.json();

            if (response.ok) {
                console.log('Account creation successful!', result);
                setUsername('');
                setPassword('');
                // onClose('');
                alert('Account created--now log in using your credentials!')
            } else {
                console.error('Account creation failed', result.message);
            }
        } catch (error) {
            console.error('Account creation error:', error);
        }
    }
  return (
    <>
        <button className='create-acct-btn' onClick={handleClick}>Not a User? Create an Account!</button>
    </>
  )
}

export default CreateAcct