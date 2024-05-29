import React, { useState } from 'react';
import HuddleModal from '../HuddleModal';
import './CreateHuddleBtn.css';

const HuddleButton = () => {
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
        <HuddleModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default HuddleButton

// onClick={() => {console.log('button clicked')}}