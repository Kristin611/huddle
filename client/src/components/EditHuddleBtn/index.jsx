import React, { useState } from 'react';
import EditHuddleModal from '../EditHuddleModal/index';

const EditHuddleBtn = ({ huddle }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditHuddleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log('button clicked');

  return (
    <>
    <button title='Edit' onClick={handleEditHuddleClick}>✎</button>
    <EditHuddleModal isOpen={isModalOpen} onClose={handleCloseModal} huddle={huddle}/>
    </>
  )
}

export default EditHuddleBtn