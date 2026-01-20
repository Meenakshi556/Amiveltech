import React,{useState} from 'react'
import axios from 'axios';

function Contact() {
  const [formData,setFormData] = useState({
      firstName: "",
      lastName:"",
      email:"",
      subject:"",
      message:"",
      agree:false,
    })
  
    const handleChange =(e) =>{
      const { name,value, type, checked} = e.target;
    
    setFormData({
      ...formData,
        [name]:type === "checkbox" ? checked : value,
      });
    };
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost/api/contact.php",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.status === "success") {
      alert("Form submitted successfully");
    } else {
      alert("Failed: " + res.data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};
  return (
    <section className='contact-menu'>
      <br /><br />
      <article>
        <aside>
          Contact Us
        </aside>
      </article>
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
           value={formData.jobTitle}
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
        <br /><button id='send-btn'>Send Messege</button>
        </form>
    </div>
    <img id="messege-img"src="https://th.bing.com/th/id/OIP.SVc0OODuuJpfSIw5DrZjVgHaHa?w=195&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" width={500}/>
    <br /><br />
      <div className='contact-details'>
      <div className='contact-location'><br />
        <img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="" width={30} height={30}/><p>P No 16, Prasanthi Hills
Bachupally,Nizampet Hyderabad <br />
Telangana, India - 500090</p>
        </div><br />
        <div className='contact-email'><br />
          <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" alt="" width={30} height={30}/>
          <p>HR@amiveltech.com</p>
        </div><br />
        <div className='contact-call'><br />
          <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt=""  width={30} height={30}/>
          <p>+91 9989498088</p>
        </div>
        </div>
    </section>
  )
}

export default Contact