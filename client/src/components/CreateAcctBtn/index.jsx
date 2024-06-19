import React, { useState } from 'react';
import './CreateAcctBtn.css';

const CreateAcct = ({username, password}) => {

    const HandleClick = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: POST,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            })
        } catch (error) {
            
        }
    }
  return (
    <>
        <button className='create-acct-btn'>Not a User? Create an Account!</button>
    </>
  )
}

export default CreateAcct