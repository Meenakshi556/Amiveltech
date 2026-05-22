import React,{useState} from 'react'
import contact_girl from '../Amivel/assets/contact-img.png';

function Contact() {
  const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
  const [formData,setFormData] = useState({
      firstName: "",
      lastName:"",
      email:"",
      subject:"",
      message:"",
      agree:false,
    })
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange =(e) =>{
      const { name,value, type, checked} = e.target;
    
    setFormData({
      ...formData,
        [name]:type === "checkbox" ? checked : value,
      });
    };
    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!GOOGLE_SCRIPT_URL) {
    setSubmitStatus({
      type: "error",
      message: "Google Apps Script URL is not configured.",
    });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus({ type: "", message: "" });

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        formType: "contact",
        ...formData,
      }),
    });

    const result = await res.json();

    if (result.status === "success") {
      setSubmitStatus({
        type: "success",
        message: "Submitted successfully.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        agree: false,
      });
    } else {
      setSubmitStatus({
        type: "error",
        message: result.message || "Failed to submit the form.",
      });
    }
  } catch (error) {
    console.error(error);
    setSubmitStatus({
      type: "error",
      message: "Unable to submit right now. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <>
     <section className="hero"><br /><br /><br /><br /><br /><br /><br />
     <div className='hero-content'>
      <h1>Contact Us</h1>
      </div>
    </section> 
    <section className='contact-us'>
      <br /><br />   
      <div className='send-messege'>
        <h2>
          To make requests for
further information,
contact us via our social channels.
        </h2>
        <form action="" onSubmit={handleSubmit}>
        <input type="text"
        className='dashedline' 
           placeholder="First Name"
           name="firstName" 
           value={formData.firstName}
           onChange={handleChange}
           /><br /><br />
        <input type="text"
        className='dashedline' 
           placeholder="Last Name"
           name="lastName" 
           value={formData.lastName}
           onChange={handleChange}
         /><br /><br />
        <input type="email"
        className='dashedline' 
           placeholder="Email"
           name="email" 
           value={formData.email}
           onChange={handleChange}
         /><br /><br />
        <input type="text"
        className='dashedline' 
           placeholder="Subject"
           name="subject" 
           value={formData.subject}
           onChange={handleChange}
         /><br /><br />
        <input type="text"
        id="messege-box"
        className='dashedline' 
           placeholder="Please describe what you need."
           name="message" 
           value={formData.message}
           onChange={handleChange}
         /><br /><br />
        <br /><button id='send-btn' type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Messege"}
        </button>
        {submitStatus.message && (
          <p role="status" style={{ color: submitStatus.type === "success" ? "green" : "red" }}>
            {submitStatus.message}
          </p>
        )}
        </form>
    </div>
    <div className='hero-content'>
    <img id="messege-img"src={contact_girl} alt="contact" width={500}/>
    </div>
    <br /><br />
    <div className='contact-address'>
        <ul type='none'>
           <li><img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="loc" width={30} height={30}/><p>Plot No. 16
Prasanthi Hills
Near Bachupally Main Road,
Bachupally,
Hyderabad – 500090
Telangana,
India</p></li>
          <li><img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="loc" width={30} height={30}/><p>Mytri Square,
91springboard,
Second Floor
 F948+W7, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500084</p></li>
          <li><img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" alt="email" width={30} height={30}/><p>HR@amiveltech.com </p></li>
          <li><img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt="contact"  width={30} height={30}/>
          <p>+91 9989498088</p></li>
        </ul>
        </div>
        
    </section>
<br />
    </>
  )
}

export default Contact
