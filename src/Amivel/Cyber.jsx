import React from 'react'
import { Link } from 'react-router-dom'

function Cyber() {
  return (
    <section id="clone">
        <div id="hand">
          <div className='over'>
          <h1>State of Cybersecurity <br />Report 2025</h1>
          <p className='hover-text'>Ai Strengthens and Disrupts Cyber Resilience.</p>
          <button className='hover-text' onClick={() => window.open("/contact","_blank")}>Learn More</button>
          </div>
          </div>
        <div id="girl">
          <div className='over'>
          <h1>Customer<br /> Success Stories</h1>
          <p className='hover-text'>How Amivel uses consulting-led,AI-powered<br /> strategies to help customers realize their<br /> ambitions.</p>
          <button className='hover-text'
          onClick={() => window.open("/contact","_blank")}>Learn More</button>
          </div>
        </div>
    </section>
  )
}

export default Cyber