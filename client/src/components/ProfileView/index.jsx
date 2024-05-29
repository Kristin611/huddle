import React from 'react';
import './ProfileView.css';
import HuddleButton from '../CreateHuddleBtn';
import HuddleList from '../HuddleList';

const ProfileView = () => {
  return (
    <section className='pfView-container'>
        <div className='welcome-container'>
            <h2 className='pf-h2'>Welcome User!</h2>
            {/* <button className='logoutBtn'>Log out</button> */}
        </div>
        <div className='huddle-container'>
            <HuddleButton />
            <HuddleList />
        </div>
        <div>
            
        </div>
    </section>
  )
}

export default ProfileView