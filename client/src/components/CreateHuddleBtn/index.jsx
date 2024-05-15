import React from 'react'
import './CreateHuddleBtn.css'

const HuddleButton = () => {
  return (
    <>
        <button className='huddle-btn' onClick={() => {console.log('button clicked')}}>+</button>
    </>
  )
}

export default HuddleButton