import React from 'react';
import aboutImage from './../../assets/penguins.webp';
import './About.css';

const About = () => {
  return (
    <>
    <section className='about-container'>
        <img className='aboutImg' src={aboutImage} alt="group of penguins" />
        <div className='about-text-overlay'>
            <h1 className='aboutTitle'>About Us</h1>
            <h2 className='aboutText'>Welcome to Huddle</h2>
            <p>Huddle is a dynamic platform designed specifically for students to share their writing and essays with their classmates. Our mission is to create a supportive and collaborative environment where students can exercise their writing skills, enhance their media literacy, and grow as confident communicators.</p>

            <h2>Our Vision</h2>
            <p>We believe that writing is a powerful tool for learning, self-expression, and connection. Huddle aims to empower students by providing a space where they can:
            </p>
            <ul>
            <li><strong>Share their work:</strong> Publish essays, stories, and articles to a community of peers.</li>
            <li><strong>Receive feedback:</strong> Engage in constructive discussions and receive valuable feedback from classmates and teachers.</li>
            <li><strong>Improve skills:</strong> Develop writing abilities and media literacy through regular practice and exposure to diverse perspectives.</li>
            </ul>

            <h2>Why Huddle?</h2>
            <p><strong>Community Focused:</strong> Huddle fosters a sense of community by connecting students within their own classes. This allows for a safe and familiar environment where students feel comfortable sharing their work.<br/>
            <strong>Skill Development:</strong> By participating in Huddle, students can improve their writing skills, critical thinking, and ability to articulate ideas clearly. This platform encourages thoughtful engagement and peer-to-peer learning.<br/>
            <strong>Accessible and User-Friendly:</strong> Huddle is designed to be intuitive and easy to use, ensuring that students of all technical abilities can participate fully.</p>

            <h2>Join the Huddle</h2>
            <p> We invite all students to join the Huddle community and embark on a journey of learning, growth, and discovery. Whether you are looking to improve your writing, share your thoughts, or simply read the works of others, Huddle is the place for you.
            </p>
            <p>Together, let’s create a vibrant and supportive community of young writers. Welcome to Huddle, where every voice matters and every story counts.</p>
        </div>
     </section>
    
    </>
  )
}

export default About