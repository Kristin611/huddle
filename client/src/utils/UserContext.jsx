import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserContext = createContext();

//Instead of relying on useParams to get the id, you can pass id as a prop to the UserProvider. If the id prop is not provided, you can default to using useParams. This makes the context flexible enough to handle different scenarios.
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState(null);
    
    const { id: paramId } = useParams();
    const id = userId || paramId;

    console.log('useParams output in context:', useParams());

    console.log('UserProvider rendering')

    useEffect(() => {
        const fetchUserData = async () => {
            const apiUrl = import.meta.env.VITE_API_URL;
            setLoading(true);
            setError(null);

            console.log('User ID in context:', id)
            if (!id) {
                setError('No user ID provided.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${apiUrl}/api/users/${id}`, {
                    credentials: 'include'
                });
                const userData = await response.json();

                console.log('Fetched user data in context:', userData)

                if (response.ok) {
                    setUser(userData) //populate userData
                    //console.log('User ID in ProfileView:', userData.id);
                } else {
                    // '?' is an example of optional chaining
                    setError(userData?.message || 'Failed to fetch user data.')
                }
            } catch (error) {
                setError('An error occurred. Please try again');
            } finally {
                setLoading(false);
            }
        };
        
        fetchUserData();
       
        
    }, [id]); //effect runs again if id changes


  return (
    <UserContext.Provider value={{ user, setUser, setUserId, loading, error}}>
        {children}
    </UserContext.Provider>
  );
}

// useUser is a custom hook to easily access the context values in other components
export const useUser = () => useContext(UserContext);

export default UserProvider;