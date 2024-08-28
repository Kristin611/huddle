import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../utils/UserContext';
import './MyProfileBtn.css';

const MyProfile = ({ isLoggedIn }) => {
    // const { id } = useParams();
    const navigate = useNavigate();
    //custom hook to get user data
    const { user, loading, error, userId } = useUser();

    console.log('User info from context in MyProfileBtn', userId);
    // console.log('Loading status:', loading);
    // console.log('Error status:', error);

  const handleClick = async () => {
     
    if (loading) {
      console.log('Loading user data');
      return;
    }

    if (error) {
      console.error('Error fetching user data in MyProfileBtn:', error)
      return;
    }

    if (user && isLoggedIn) {
      const userId = user.id
      navigate(`/profile/${userId}`)
      console.log('Navigating to profile in MyProfileBtn:', `/profile/${userId}`);
    } else {
      console.error('User not logged in or failed to navigate to profile page.')
    }

    if (!isLoggedIn) {
      alert('You must sign in to access your dashboard!')
    }
  
  }
  return (
    <>
        <button className='dash-btn' onClick={handleClick}>Dashboard</button>
    </>
  )
}

export default MyProfile