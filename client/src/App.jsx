import { useState } from 'react'
import React, { useEffect } from 'react';
import { Header } from './components/Header/index';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Modal from 'react-modal';



function App() {
  

  //this useEffect is used for screen readers for accessibility purposes: Modal.setAppElement('#root') tells react-modal to treat the #root element as the main content of your application that should be hidden when a modal is open.
  useEffect(() => {
    Modal.setAppElement('main')
  }, []);

  return (
    <>
      <Header/>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
