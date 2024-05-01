import React from 'react';
import heroImage from '../../assets/penguins.webp'
import './Hero.css'

const Hero = () => {
  return (
    <>
     <section className='hero-container'>
        <img className='heroImg' src={heroImage} alt="group of penguins" />
        <div className='text-overlay'>
            <h2>Huddle</h2>
        </div>
     </section>
    </>
  )
}

export default Hero