import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/index';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Modal from 'react-modal';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log('App - isLoggedIn:', isLoggedIn);
  // console.log('App - setIsLoggedIn:', setIsLoggedIn);

  //this useEffect is used for screen readers for accessibility purposes: Modal.setAppElement('#root') tells react-modal to treat the #root element as the main content of your application that should be hidden when a modal is open.
  useEffect(() => {
    Modal.setAppElement('main')
  }, []);

  

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Navbar isLoggedIn={isLoggedIn}/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
