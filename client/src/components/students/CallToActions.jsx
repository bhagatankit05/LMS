import React from 'react'
import { assets } from '../../assets/asset'

const CallToActions = () => {
  return (
    <div>
      <h1>Learn anything, anytime, anywhere</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos accusantium ipsum!
      </p>
      <div>
        <button>Get Started</button>
        <button>Learn More <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default CallToActions
