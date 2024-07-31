import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; // useParams hook is used to access parameters from the URL
import './ProfileView.css';
import HuddleButton from '../CreateHuddleBtn';
import HuddleList from '../HuddleList';


const ProfileView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null); //initialize with null to indicate uninitialized state, i.e., still waiting for the data, which is useful for conditional rendering. Null is a default placeholder for objects that hold data: it indicates that the state is expected to be an object but hasn't been populated yet.
  
  useEffect(() => {
    const fetchUserData = async () => {
      const apiUrl = import.meta.env.VITE_API_URL

      try {
        const response = await fetch(`${apiUrl}/api/users/${id}`, {
          credentials: 'include'
        });
        const userData = await response.json();

        console.log('Fetched userData:', userData);

        if (response.ok) {
          setUser(userData); //populate user data
          //console.log('User ID in ProfileView:', userData.id);
        } else {
          console.error('Failed to fetch user data:', userData.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();

  }, [id]); //effect runs again if id changes

  console.log('User in ProfileView render:', user);

  return (
    <section className='pfView-container'>
        <div className='welcome-container'>
            <h2 className='pf-h2'>Welcome {user ? user.username : 'User'}!</h2>
        </div>
        <div className='huddle-container'>
            {user && <HuddleButton user_id={user.id}/>}
            <HuddleList />
        </div>
        <div>
            
        </div>
    </section>
  )
}

export default ProfileView