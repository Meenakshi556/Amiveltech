import React from 'react'

const Industries = () => {
  return (
    <>
    <section className="hero"><br /><br /><br /><br /><br /><br /><br />
    <div className='hero-content'>
        <h1>Industries We Serve</h1>
          <p>
            We empower organizations across industries by delivering
            innovative, scalable, and secure technology solutions.
          </p>
          </div>
    </section>
      <div className="industries-page">
      
      {/* Hero Section */}
      

      {/* Industries Cards */}
      <section className="industries-section">
        <div className="industry-card">
          <h3>🏦 Banking</h3>
          <p>
            Secure digital banking solutions, fintech integrations,
            compliance-driven platforms, and customer-centric experiences.
          </p>
        </div>

        <div className="industry-card">
          <h3>🏥 Healthcare</h3>
          <p>
            Advanced healthcare systems including EHR, telemedicine,
            patient management, and secure medical data solutions.
          </p>
        </div>

        <div className="industry-card">
          <h3>💻 Hi-Tech</h3>
          <p>
            Cutting-edge software development, cloud-native applications,
            AI-driven products, and scalable SaaS platforms.
          </p>
        </div>

        <div className="industry-card">
          <h3>🏭 Manufacturing</h3>
          <p>
            Smart manufacturing solutions with ERP systems, IoT integration,
            automation, and real-time analytics.
          </p>
        </div>
        </section>
        <section className="bts">
  <h2>Partner With Us</h2>
  <p>Let’s build innovative solutions together.</p>
  <button
  onClick={() => window.open("/contact","_blank")}>Contact Us</button>
</section>
    </div>
    </>
  )
}

export default Industries