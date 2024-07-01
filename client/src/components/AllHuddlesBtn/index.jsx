import React from 'react';
import './AllHuddlesBtn.css';

const AllHuddles = ({ setHuddle }) => {

    const handleClick = async () => {

        try {
            const response = await fetch('http://localhost:3000/api/huddle');
            const huddleData = await response.json();

            if (response.ok) {
                setHuddle(huddleData)
            } else {
                console.error('Failed to fetch all huddles:', huddleData.message);
            }
        } catch (error) {
            console.error('Error fetching data', error);
        }
    }
  return (
    <>
        <button className='all-huddles-btn'onClick={handleClick}>All Huddles</button>
    </>
  )
}

export default AllHuddles