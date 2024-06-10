import React from 'react'

const EditHuddle = ({ huddle }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditHuddleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <button title='Edit' onClick={handleEditHuddleClick}>✎</button>
  )
}

export default EditHuddle