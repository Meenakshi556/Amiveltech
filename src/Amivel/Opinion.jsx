import React from 'react'

function Opinion() {
  return (
    <div>
        
{/* <!-- HERO SECTION --> */}
<section class="hero"><br /><br /><br /><br /><br /><br /><br />
<div className='hero-content'>
  <h1>What We Think</h1>
  <p>
    We believe technology should simplify business,
    accelerate growth, and create real impact.
  </p>
  </div>
</section>

{/* <!-- THINKING CARDS --> */}
<section class="cards">
  <div class="card">
    <h3>Innovation First</h3>
    <p>
      We continuously explore modern technologies to
      build scalable and future-ready solutions.
    </p>
  </div>

  <div class="card">
    <h3>Client-Centric Approach</h3>
    <p>
      Every solution is designed around client goals,
      business challenges, and long-term success.
    </p>
  </div>

  <div class="card">
    <h3>Quality Driven</h3>
    <p>
      We follow best practices, testing standards, and
      performance optimization at every stage.
    </p>
  </div>
</section>

{/* <!-- TECHNOLOGY INSIGHTS --> */}
<section class="insights">
  <h2>Technology Insights</h2>
  <ul>
    <li>Cloud-native and scalable architectures</li>
    <li>Secure and performance-focused development</li>
    <li>AI & data-driven decision making</li>
    <li>Modern web & mobile experiences</li>
  </ul>
</section>

{/* <!-- FUTURE VISION --> */}
<section class="vision">
  <h2>Our Future Vision</h2>
  <p>
    We envision a digital future where businesses of all sizes
    can leverage advanced technology to innovate, grow, and compete globally.
  </p>
</section>

{/* <!-- CALL TO ACTION --> */}
<section class="cta">
  <h2>Let’s Build the Future Together</h2>
  <button 
  onClick={() => window.open("/contact","_blank")}>Work With Us</button>
</section>


    </div>
  )
}

export default Opinion