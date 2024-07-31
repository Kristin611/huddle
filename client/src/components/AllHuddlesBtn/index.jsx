import React from 'react';
import './AllHuddlesBtn.css';

const AllHuddles = ({ setHuddle }) => {

    const handleClick = async () => {

        const apiUrl = import.meta.env.VITE_API_URL

        try {
            const response = await fetch(`${apiUrl}/api/huddle`);
            const huddleData = await response.json();

            if (response.ok) {
                setHuddle(huddleData)
            } else {
                console.error('Failed to fetch all huddles:', huddleData.message);
            }
        } catch (error) {
            console.error('Error fetching data', error);
            // error fetching data 
        }
    }
  return (
    <>
        <button className='all-huddles-btn'onClick={handleClick}>All Huddles</button>
    </>
  )
}

export default AllHuddles