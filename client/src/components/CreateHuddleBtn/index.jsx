import React, { useState } from 'react';
import HuddleModal from '../HuddleModal';
import './CreateHuddleBtn.css';

const HuddleButton = ({user_id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateHuddleClick = () => {
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };


  return (
    <>
        <button className='huddle-btn' onClick={handleCreateHuddleClick}>+</button>
        <HuddleModal isOpen={isModalOpen} onClose={handleCloseModal} user_id={user_id}/>
    </>
  )
}

export default HuddleButton

// onClick={() => {console.log('button clicked')}}