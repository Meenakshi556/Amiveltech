import React, { useState } from "react";
import insurance_hand from "../Amivel/assets/insurance_hand.webp"
import heart_insur from "../Amivel/assets/health_insur.jpg"
import life from "../Amivel/assets/life_insurance.avif"
import travel from "../Amivel/assets/travel_insur.jpg"
import home from "../Amivel/assets/home_insur.jpg"

function Last() {
  const images = [
    insurance_hand,
    heart_insur,
    life,
    travel,
    home
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
