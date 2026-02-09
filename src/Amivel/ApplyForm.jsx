import React,{useState} from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


function ApplyForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        mobile:"",
        college:"",
        experience:"",
        // resume:null
      })
      const location = useLocation();
const { jobId, jobTitle, company } = location.state || {};

      const [resume, setResume] = useState(null);


       const handleChange = e => {
        const { name,value} = e.target;
    setFormData({
       ...formData,
        [name]: value ,
      });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  }
       const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append("resume", resume); // FILE
    data.append("jobId", jobId);
data.append("jobTitle", jobTitle);
data.append("company", company);


    try {
      const res = await axios.post(
        "http://localhost/api/submit.php",data,
        {
          headers: {
            "Content-Type" : "multipart/form-data",
          },
        }
      );
      if(res.data.status === "success") {
      alert("Application submitted successfully");
      }else {
        alert(res.data.message)
      }
    } catch (err) {
      console.error(err);
      alert("Server error")
    }
  };
  return (
    <div>
            <section className='Apply-form'><br />
              <h3 className='apply-title ' style={{ marginBottom: "10px" ,marginLeft: "80vh"}}>
  Applying for: <span style={{ color: "#0a58ca" }}>{jobTitle}</span>
</h3>
<p className='apply-company'  style={{ marginBottom: "10px" ,marginLeft: "80vh"}}><b>
  Company: {company}</b></p>
      <form onSubmit={handleSubmit }>
        <Link to="/careers"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"  />Back
</svg></Link><br /><br />
<label className='dob'>First Name*</label>
        <input 
        className='Apply-inputs'
        type="text"
        name='firstName'
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleChange}/><br /><br />
        <label  className='dob'>Last Name*</label>
        <input type="text"
        className='Apply-inputs'
        name='lastName'
        placeholder='Last Name'
         value={formData.lastName}
        onChange={handleChange}
        /><br /><br />
        <label className='dob'>Email*</label>
        <input type="email" 
        className='Apply-inputs'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}/><br /><br />
        <label className='dob'>Mobile*</label>
        <input type="tel" name="mobile" id=""
        placeholder='Mobile'
        className='Apply-inputs'
         value={formData.mobile}
        onChange={handleChange} /><br /><br />
        <label className='dob'>College*</label>
        <input type="text" name='college' placeholder='College'
        className='Apply-inputs'
         value={formData.college}
        onChange={handleChange}/><br /><br />
        <label className='dob'>Experiance*</label>
        <input type="number" name="experience" 
        className='Apply-inputs' placeholder='Experience'
         value={formData.experience}
        onChange={handleChange}/><br /><br />
        <label className='dob'>Upload Resume*</label>  
        <input type='file' name='resume' 
        className='Apply-inputs'     
        onChange={handleFileChange} required/>
        <button type="submit" id="btn-submit">Submit</button>
      </form>
    </section>
    </div>
  )
}

export default ApplyForm