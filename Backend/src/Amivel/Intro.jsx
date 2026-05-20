import React from 'react'
import intro from "../Amivel/assets/intro_img.png"

function Intro() {
  return (
    <div>I
        <section className='introsec'>
            <div><br /><br />
                <h2 id="from">From Strategy to<br /> Execution with Amivel Consulting.</h2>
                <p id="become">To become a trusted and innovative technology
company by delivering high-quality IT services and
developing impactful proprietary products.
AMIVELTECH Pvt Ltd envisions empowering
businesses through smart, scalable, and future-ready
digital solutions while maintaining excellence, integrity,
and customer satisfaction in everything we do.</p>
            </div>
            <div id="suit"><img src={intro} alt="" id="intro-img"/></div>
        </section>
    </div>
  )
}

export default Intro