import React, { useState } from "react";

function Last() {
  const images = [
    "https://b2343758.smushcdn.com/2343758/wp-content/uploads/indexed-universal-life-insurance-a-complete-guide.jpeg?lossy=1&strip=1&webp=1",
    "https://img.freepik.com/premium-photo/different-careers-insurance-wording-insurance-is-important-ensure-risk-guarantee-stability-life-health-financial-concept_50039-5223.jpg",
    "https://dev.findqualityinsurance.com/wp-content/uploads/2017/06/Health-Insurance.jpg",
    "https://landen.imgix.net/cy57inb2lyhe/assets/yn6thu8i.jpg",
    "https://globalbusinessdiary.com/wp-content/uploads/2023/07/Types-Of-Business-Insurance-Policies.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h1 style={{ fontSize: "55px", textAlign: "center" }}>Our Product</h1>
      <h3 style={{ fontSize: "35px", color: "#dc9a0e", textAlign: "center" }}>
        Pertenziya
      </h3>

      <p style={{ margin: "20px auto", maxWidth: "900px", fontSize: "15px" }}>
        The name <strong>Pertenziya</strong> is derived from a Russian word that
        means <em>"claim"</em>. It represents our core purpose of assisting and
        supporting clients throughout the insurance claim process.
      </p>

      <div style={{ textAlign: "center" }}>
        <img
          src={images[currentIndex]}
          alt="Slider"
          onClick={nextImage}
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "15px",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
          }}
        />

        {/* DOTS */}
        <div className="gallery-dots" style={{ marginTop: "15px" }}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Last;
