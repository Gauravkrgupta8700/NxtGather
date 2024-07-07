import React from 'react'
import './Hero.css';
import hand_icon from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/backgroun6.0.png'
function Hero() {
  return (
    <div className="hero"  >
        <div className="hero-left">
                     <div>
        <div className="hero-hand-icon">
            <p><span>N</span>ew</p>
            <img src={hand_icon} alt='' />
        </div>
        <p><span>E</span>vents</p>
        <p>For <span> E</span>veryone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Event</div>
            <img src={arrow} alt='' />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero2} alt='' />
      </div>
    </div>
  )
}

export default Hero
