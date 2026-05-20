import React from 'react'

function About() {
  return (
    <div>
{/* <!-- HERO SECTION --> */}
<section className="hero"><br /><br /><br /><br /><br /><br /><br />
<div className='hero-content'>
  <h1>About Amivel Technologies</h1>
  <p>Empowering businesses through innovative digital solutions</p>
</div>
</section>

{/* <!-- COMPANY OVERVIEW --> */}
<section className="overview">
  <h2>Who We Are</h2>
  <p>
    Amivel Tech Private Limited is a technology-driven IT company
    based in Hyderabad, Telangana. Established in 2024, we
    specialize in software development, cloud solutions,
    consultancy, and digital transformation services.
  </p>
</section>

{/* <!-- MISSION & VISION --> */}
<section className="mission-vision">
  <div className="box">
    <h3>Our Mission</h3>
    <p>
      To deliver reliable, scalable, and secure technology
      solutions that help businesses grow and adapt in a
      fast-changing digital world.
    </p>
  </div>

  <div className="box">
    <h3>Our Vision</h3>
    <p>
      To become a trusted global technology partner known for
      innovation, quality, and customer success.
    </p>
  </div>
</section>

{/* <!-- VALUES --> */}
<section className="values">
  <h2>Our Core Values</h2>
  <div className="value-cards">
    <div className="about-card">Innovation</div>
    <div className="about-card">Integrity</div>
    <div className="about-card">Quality</div>
    <div className="about-card">Customer Focus</div>
  </div>
</section>

{/* <!-- WHY AMIVEL --> */}
<section className="why-us">
  <h2>Why Choose Amivel Tech?</h2>
  <ul>
    <li>Experienced and skilled professionals</li>
    <li>Client-focused development approach</li>
    <li>Modern technologies and best practices</li>
    <li>Timely delivery with quality assurance</li>
  </ul>
</section>

{/* <!-- CALL TO ACTION --> */}
<section className="bts">
  <h2>Partner With Us</h2>
  <p>Let’s build innovative solutions together.</p>
  <button
  onClick={() => window.open("/contact","_blank")}>Contact Us</button>
</section>
    </div>
  )
}

export default About