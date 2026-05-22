import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


function ApplyForm() {
    const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
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
      const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
      const [isSubmitting, setIsSubmitting] = useState(false);


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

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || "");
        resolve(result.split(",")[1] || "");
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

       const handleSubmit = async e => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      setSubmitStatus({
        type: "error",
        message: "Google Apps Script URL is not configured.",
      });
      return;
    }

    if (!resume) {
      setSubmitStatus({
        type: "error",
        message: "Please upload your resume.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const resumeBase64 = await fileToBase64(resume);
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          formType: "application",
          ...formData,
          jobId,
          jobTitle,
          company,
          resumeName: resume.name,
          resumeMimeType: resume.type,
          resumeBase64,
        }),
      });

      const result = await res.json();

      if(result.status === "success") {
        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          college: "",
          experience: "",
        });
        setResume(null);
        e.target.reset();
      }else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit the application.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        type: "error",
        message: "Unable to submit right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
            <section className='Apply-form'><br />
              <h3 className='apply-title ' style={{ marginBottom: "10px" ,marginLeft: "35%"}}>
  Applying for: <span style={{ color: "#0a58ca" }}>{jobTitle}</span>
</h3>
<p className='apply-company'  style={{ marginBottom: "10px" ,marginLeft: "35%"}}><b>
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
        <button type="submit" id="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {submitStatus.message && (
          <p role="status" style={{ color: submitStatus.type === "success" ? "green" : "red" }}>
            {submitStatus.message}
          </p>
        )}
      </form>
    </section>
    </div>
  )
}

export default ApplyForm
