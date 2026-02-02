import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // adjust path if needed
import "./Jobs.css";
import { useNavigate } from "react-router-dom";



const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  console.log("PROJECT ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);


  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "Jobs"));
      const jobsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()

      }));
      setJobs(jobsData);
      console.log(jobsData);
    };

    fetchJobs();
  }, []);

  return (
    <>
    <section className="jobs-section">
      <h2 className="jobs-heading">Open Positions</h2>

      <div className="jobs-container">
        {jobs.map(Job => (
          <div className="job-card" key={Job.id}>
            <h3>{Job.title}</h3>
            <p className="company">{Job.company}</p>
            <img src="https://amiveltech.com/images/logo.png" alt=""  width={100}/>
            <p><strong>YOP:</strong> {Job.yop}</p>
            <p><strong>Skills:</strong> {Job.skills}</p>
            <p><strong>Gender:</strong> {Job.gender}</p>
            <p className="location">📍 {Job.location}</p>

            <button
              className="apply-btn"
              onClick={() =>
  navigate("/applyform", {
    state: {
      jobId: Job.id,
      jobTitle: Job.title,
      company: Job.company,
    },
  })
}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Jobs;
