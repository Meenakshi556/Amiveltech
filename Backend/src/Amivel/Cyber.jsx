import React from 'react'

function Cyber() {
  return (
    <section id="clone">
        <div id="hand">
          <div className='over'>
          <h1>State of Cybersecurity <br />Report 2025</h1><br /><br />
          <p className='hover-text'>Ai Strengthens and Disrupts Cyber Resilience.</p><br />
          <button className='hover-text' onClick={() => window.open("/security","_blank")}>Learn More</button>
          </div>
          </div>
        <div id="girl">
          <div className='over'>
          <h1>Customer<br /> Success Stories</h1><br /><br />
          <p className='hover-text'>How Amivel uses consulting-led,AI-powered<br /> strategies to help customers realize their<br /> ambitions.</p><br />
          <button className='hover-text'
          onClick={() => window.open("/contact","_blank")}>Learn More</button>
          </div>
        </div>
    </section>
  )
}

export default Cyber