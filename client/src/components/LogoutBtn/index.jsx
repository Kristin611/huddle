import React from 'react';
import {useNavigate} from 'react-router-dom';
import './LogoutBtn.css';

const LogoutBtn = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        const apiUrl = import.meta.env.VITE_API_URL

        try {
            const response = await fetch(`${apiUrl}/api/users/logout`, {
                method: 'POST',
                credentials: 'include',
            });

            if (response.status === 204) {
                console.log('Logout successful!')
                navigate('/');
            } else {
                const result = await response.json();
                console.error('Logout failed:', result.message);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

  return (
    <>
        <button className='logoutBtn' type='button' onClick={handleLogout}>Log out</button>
    </>
  )
}

export default LogoutBtn