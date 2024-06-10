import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditHuddleBtn from '../EditHuddleBtn/index';
import './HuddleList.css';

const HuddleList = () => {
    const [huddles, setHuddle ] = useState([]);

    useEffect(() => {
        const fetchHuddles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/huddle');
                console.log('response data:', response)
                setHuddle(response.data)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };

        fetchHuddles();
    }, []);

  return (
    <div>
        <ul className='huddle-list'>
            {huddles.map(huddle => (
                <div key={huddle.id} className='huddle-card'>
                    <li>
                        <h2>{huddle.huddleTitle}</h2>
                        <h3>by {huddle.author}</h3>
                    </li>
                    <li>{huddle.huddleText}</li>
                    <div className='edit-buttons'>
                        <EditHuddleBtn huddle={huddle}/>
                        {/* <button title='Delete'>🗑️</button> */}
                    </div>    
                </div>
            ))}
        </ul>
    </div>
  )
}

export default HuddleList