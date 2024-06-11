import React from 'react';

const DeleteHuddle = ({ huddle, onDelete }) => {

    const handleDeleteHuddleClick = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/huddle/${huddle.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
            })

            if (response.ok) {
                console.log('Huddle deleted!')
                onDelete(huddle.id);
            } else {
                console.error('Huddle not updated!')
            }
        } catch (error) {
            console.error('Huddle error:', error);
        }
    }
  return (
    <>
        <button title='Delete' onClick={handleDeleteHuddleClick}>🗑️</button>
    </>
  )
}

export default DeleteHuddle