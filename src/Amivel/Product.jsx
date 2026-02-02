import React from 'react'

const Product = () => {
  return (
    <div>

      {/* Product Menu */}
      <section className="hero"><br /><br /><br /><br /><br /><br /><br />
      <div className='hero-content'>
        <h1>Our Product</h1>
        </div>
      </section>

      {/* About Pertenziya */}
      <section className="product-section" id="about-product">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <div>
            <h2>Pertenziya</h2>
            <p style={{ marginBottom: "15px" }}>
              <strong>Pertenziya</strong> is derived from a Russian word meaning <em>"claim"</em>. 
              It represents our core purpose of assisting and supporting clients throughout the insurance claim process.
            </p>
            <p style={{ marginBottom: "15px" }}>
              The name reflects <strong>unity, action, and advocacy</strong>, highlighting our commitment to working alongside customers
              to help them submit and manage claims with confidence and clarity.
            </p>
            <ul style={{ marginLeft: "20px" }}>
              <li>✔ Customer-first claim assistance</li>
              <li>✔ Transparent documentation support</li>
              <li>✔ End-to-end claim tracking</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.flurish.in/blog/wp-content/uploads/2022/11/Insurance-Available-In-India-640x427.png"
              alt="Insurance claim support"
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)"
              }}
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-product" id="home">
        <h1>Protect What Matters Most</h1>
        <p>
          Pertenziya provides trusted and transparent insurance claim assistance
          for individuals, families, and businesses.
        </p>
      </section>

      {/* Services */}
      <section className="product-section" id="services">
        <h2>Types of Insurance Claims</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 30px" }}>
          <strong>Pertenziya</strong> stands for unity, action, and advocacy—working alongside customers
          to submit and manage claims with confidence and clarity.
        </p>

        <div className="product-cards">
          <div className="type-card">
            <h3>Health Insurance Claims</h3>
            <p>Hospitalization, cashless, and reimbursement claim support.</p>
          </div>

          <div className="type-card">
            <h3>Life Insurance Claims</h3>
            <p>Death, maturity, and survival benefit claim assistance.</p>
          </div>

          <div className="type-card">
            <h3>Motor Insurance Claims</h3>
            <p>Accident, theft, and vehicle damage claim handling.</p>
          </div>

          <div className="type-card">
            <h3>Property Insurance Claims</h3>
            <p>Fire, disaster, theft, and asset damage claims.</p>
          </div>

          <div className="type-card">
            <h3>Single Claim Assistance</h3>
            <p>Dedicated handling for individual claim cases.</p>
          </div>

          <div className="type-card">
            <h3>Multiple / Ongoing Claims</h3>
            <p>Structured tracking and support for multiple claims.</p>
          </div>
        </div>
      </section>
      <footer classNmae="footer-product" style={{ 
        textAlign: "center",
         padding: "20px" ,
         background: "#dc9a0e",
          color: "#fff",
           margintop: "40px"
            }}>
        <p>© 2026 SecureLife Insurance. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Product
