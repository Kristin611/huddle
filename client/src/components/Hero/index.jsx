import React from 'react';
import heroImage from '../../assets/penguins.webp'
import './Hero.css'
import ProfileView from '../ProfileView';

const Hero = () => {
  return (
    <>
     <section className='hero-container'>
        <img className='heroImg' src={heroImage} alt="group of penguins" />
        <div className='text-overlay'>
            <h1 className='huddleTitle'>Huddle</h1>
            <h2 className='huddleText'>A place where students can create, share, and inspire.</h2>
        </div>
     </section>
     <section>
        <ProfileView />
     </section>
    </>
  )
}

export default Hero