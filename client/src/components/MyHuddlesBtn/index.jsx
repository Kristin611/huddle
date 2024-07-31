import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MyHuddlesBtn.css';

const MyHuddles = ({ setHuddle }) => {
    const { id } = useParams();
    //const [huddle, setHuddle] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL

    const handleClick = async () => {

        try {
            const response = await fetch(`${apiUrl}/api/huddle/user/${id}`);
            const huddleData = await response.json();

            if (response.ok) {
                setHuddle(huddleData);
            } else {
                console.error("Failed to fetch user's huddles!", huddleData.message);
            }

        } catch (error) {
            console.error("Error fetching user's huddles.", error);
        }
    }
  return (
    <>
        <button className='my-huddle-btn' onClick={handleClick}>My Huddles</button>
    </>
  )
}

export default MyHuddles