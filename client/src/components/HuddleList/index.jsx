import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditHuddleBtn from '../EditHuddleBtn/index';
import './HuddleList.css';
import DelHuddleBtn from '../DelHuddleBtn/index';
import MyHuddles from '../MyHuddlesBtn';
import AllHuddles from '../AllHuddlesBtn';

const HuddleList = () => {
    const [huddles, setHuddle ] = useState([]);

    useEffect(() => {
        const fetchHuddles = async () => {

            const apiUrl = import.meta.env.VITE_API_URL

            try {
                const response = await axios.get(`${apiUrl}/api/huddle`);
                console.log('response data:', response)
                setHuddle(response.data)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };

        fetchHuddles();
    }, []);

    const handleDelete = (huddleId) => {
        setHuddle(huddles.filter(huddle => huddle.id !== huddleId));
    };

  return (
    <div>
        <div className='my-huddles'>
            <MyHuddles setHuddle={setHuddle}/>
            <AllHuddles setHuddle={setHuddle}/>
        </div>
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
                        <DelHuddleBtn huddle={huddle} onDelete={handleDelete}/>
                    </div>    
                </div>
            ))}
        </ul>
        
    </div>
  )
}

export default HuddleList