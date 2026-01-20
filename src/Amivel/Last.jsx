import React, { useState} from 'react'
import axios from 'axios';

function Last() {
  const [formData,setFormData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    jobTitle:"",
    company:"",
    country:"",
    message:"",
  })

  const handleChange =(e) =>{
    const { name,value} = e.target;
  
  setFormData({
    ...formData,
      [name] : value,
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      const response = await axios.post(
        "http://localhost/api/insert.php",
        {
          firstName: formData.firstName,
          lastName:formData.lastName,
          email:formData.email,
          jobTitle:formData.jobTitle,
          company:formData.company,
          country:formData.country,
          message:formData.message,
        },
        {
          headers:{
            "Content-Type": "application/json"
          }
        }

      );
      if(response.data.status === "success"){
        alert("Form submitted successfully");
      } else {
        alert(response.data.message);
      }
    }catch(error){
        console.error(error);
        alert("Server error");
      }
    };

  return (
    <div>
        <p id="Everyday">Every day, Amivel leverages AI-infused technologies <br />
&nbsp; &nbsp; to empower clients around the globe to build <br />
&nbsp;a more resilient, secure and sustainable future..<br /></p>
        <p id="how">How can we help you?</p>
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
           placeholder="Work Email"
           name="email" 
           value={formData.email}
           onChange={handleChange}
         /><br /><br />
        <input type="text"
        className='dashedline' 
           placeholder="Job Title"
           name="jobTitle" 
           value={formData.jobTitle}
           onChange={handleChange}
         /><br /><br />
        <input type="text"
        className='dashedline' 
           placeholder="Company"
           name="company" 
           value={formData.company}
           onChange={handleChange}
         /><br /><br />
        <input type="text"
        className='dashedline' 
           placeholder="Country"
           name="country" 
           value={formData.country}
           onChange={handleChange}
         /><br /><br />
        <input type="text"
        className='dashedline' 
           placeholder="Message"
           name="message" 
           value={formData.message}
           onChange={handleChange}
         /><br /><br />
        <br /><button id='btn2'>Submit</button>
        <p id="paraend">Click here to opt out of Amivel’s mailing lists.</p>
        </form>
    </div>
  )
}

export default Last