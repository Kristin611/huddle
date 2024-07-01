import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MyProfile = ({ isLoggedIn }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log('User ID from useParams:', id);

  const handleClick = async () => {
     
  
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      //const userData = await response.json();

      if (response.ok && isLoggedIn) {
        navigate(`/profile/${id}`);
      } else {
        console.error('Failed to navigate to profile page', response.message)
      }

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  return (
    <>
        <button onClick={handleClick}>My Profile</button>
    </>
  )
}

export default MyProfile