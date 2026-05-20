import React, { useState } from "react";
import axios from "axios";
import contact_girl from "../Amivel/assets/contact-img.png";

function Contact() {

  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://amivel-website-1.onrender.com";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        `${API_URL}/api/contact`,
        formData,
        {
          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );

      if (res.data.status === "success") {

        alert("Submitted Successfully");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          agree: false,
        });

      } else {

        alert(
          "Failed: " + res.data.message
        );
      }

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Server error"
      );
    }
  };

  return (
    <>

      <section className="hero">

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="hero-content">

          <h1>Contact Us</h1>

        </div>

      </section>

      <section className="contact-us">

        <br />
        <br />

        <div className="send-messege">

          <h2>
            To make requests for further
            information, contact us via
            our social channels.
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="dashedline"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <input
              type="text"
              className="dashedline"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <input
              type="email"
              className="dashedline"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <input
              type="text"
              className="dashedline"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <textarea
              id="messege-box"
              className="dashedline"
              placeholder="Please describe what you need."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <br />
            <br />

            <button id="send-btn">
              Send Message
            </button>

          </form>

        </div>

        <div className="hero-content">

          <img
            id="messege-img"
            src={contact_girl}
            alt="contact"
            width={500}
          />

        </div>

        <br />
        <br />

        <div className="contact-address">

          <ul type="none">

            <li>

              <img
                src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png"
                alt="location"
                width={30}
                height={30}
              />

              <p>
                Plot No. 16
                <br />
                Prasanthi Hills
                <br />
                Near Bachupally Main Road,
                <br />
                Bachupally,
                <br />
                Hyderabad – 500090
                <br />
                Telangana,
                India
              </p>

            </li>

            <li>

              <img
                src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png"
                alt="location"
                width={30}
                height={30}
              />

              <p>
                Mytri Square,
                <br />
                91springboard,
                <br />
                Second Floor,
                <br />
                Kondapur,
                <br />
                HITEC City,
                <br />
                Hyderabad,
                Telangana 500084
              </p>

            </li>

            <li>

              <img
                src="https://cdn-icons-png.flaticon.com/128/646/646135.png"
                alt="email"
                width={30}
                height={30}
              />

              <p>
                HR@amiveltech.com
              </p>

            </li>

            <li>

              <img
                src="https://cdn-icons-png.flaticon.com/128/483/483947.png"
                alt="contact"
                width={30}
                height={30}
              />

              <p>
                +91 9989498088
              </p>

            </li>

          </ul>

        </div>

      </section>

      <br />

    </>
  );
}

export default Contact;