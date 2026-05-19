import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import "./Jobs.css";
import logo from "../Amivel/assets/logo.png";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Jobs"));
        const jobsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobsData);
      } catch (err) {
        console.error(err);
        setError("Unable to load open positions right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const formatSkills = (skills) => {
    if (!skills) return [];
    if (Array.isArray(skills)) return skills;
    return String(skills)
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
  };

  return (
    <section className="jobs-section">
      <div className="jobs-header">
        <p className="jobs-eyebrow">Careers</p>
        <h2 className="jobs-heading">Open Positions</h2>
      </div>

      {loading && <p className="jobs-status">Loading positions...</p>}
      {error && <p className="jobs-status jobs-error">{error}</p>}
      {!loading && !error && jobs.length === 0 && (
        <p className="jobs-status">No open positions available right now.</p>
      )}

      <div className="jobs-container">
        {jobs.map((job) => {
          const skills = formatSkills(job.skills);

          return (
            <article className="job-card" key={job.id}>
              <div className="job-card-top">
                <div>
                  <p className="job-company">{job.company}</p>
                  <h3>{job.title}</h3>
                </div>
                <img
                  src={logo}
                  alt="AmivelTech"
                  className="job-logo"
                />
              </div>

              <div className="job-details">
                <p>
                  <span>YOP</span>
                  {job.yop || "Any"}
                </p>
                <p>
                  <span>Gender</span>
                  {job.gender || "Any"}
                </p>
                <p>
                  <span>Location</span>
                  {job.location || "Not specified"}
                </p>
              </div>

              <div className="job-skills">
                <span className="job-skills-label">Skills</span>
                <div className="job-skill-list">
                  {skills.length > 0 ? (
                    skills.map((skill) => (
                      <span className="job-skill" key={skill}>
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="job-skill">Not specified</span>
                  )}
                </div>
              </div>

              <button
                className="apply-btn"
                onClick={() =>
                  navigate("/applyform", {
                    state: {
                      jobId: job.id,
                      jobTitle: job.title,
                      company: job.company,
                    },
                  })
                }
              >
                Apply
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Jobs;
