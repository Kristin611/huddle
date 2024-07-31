import React from 'react';

const DeleteHuddle = ({ huddle, onDelete }) => {

    const handleDeleteHuddleClick = async () => {

        const apiUrl = import.meta.env.VITE_API_URL    
        
        try {
            const response = await fetch(`${apiUrl}/api/huddle/${huddle.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'},
                credentials: 'include'
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