import React from 'react'
import cloud from "../Amivel/assets/cloud_ser.jpg";
import webdev from "../Amivel/assets/web_ser.webp";
import mobile from "../Amivel/assets/mobile.jpg";
import software from "../Amivel/assets/software.jpg";
import analytics from "../Amivel/assets/analytics.jpg";
import staff from "../Amivel/assets/staff.png";
function Services() {
  return (
    <>
        <section className="hero"><br /><br /><br /><br /><br /><br /><br />
        <div className='hero-content'>
            <h1>Our Services</h1>    
            </div>
        </section>
        <section className='services-menu'>
            <div className='cloud-services'>
                <div className='services-images'>
                <img src={cloud} alt="" width={600} />
                </div>
                <div className='services-details'>
                   < h2>Cloud Services</h2>
            <p>AmivelTech provides scalable cloud services in India, including cloud infrastructure setup,
cloud migration, DevOps & CI/CD, and cloud security across AWS, Azure, and Google Cloud platforms</p>
           <ul type='none'>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Cloud Migration</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Infrastructure</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>SevOps & CI/CD</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Cloud Security</li><br />
            </ul>
            <button id="contact-btn"
            onClick={() => window.open("/contact","_blank")}>Contact Us</button>
                </div>
            </div>
            <div className='web-development'>
                <div className='services-details'>
                    <h2>Web Development</h2>
            <p>Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.</p>
            <ul type='none'>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Custom Web Apps</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>E-commerce Solutions</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Progressive Web Apps</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>API Development5</li><br />
            </ul>
            <button id="contact-btn"
            onClick={() => window.open("/contact","_blank")}>Contact Us</button>
                </div>
                <div className='services-images'>
                    <img src={webdev} alt="" width={600}/>
                </div>
            </div>
            <div className='mobile-development'>
                <div className='services-images'>
                    <img src={mobile} alt="mobile" width={600} />
                </div>
                <div className='services-details'>
                    <h2>Mobile Development</h2>
            <p>Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.</p>
            <ul type='none'>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>iOS Development</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Android Development</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>React Native / Flutter</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>App Maintenance</li><br />
            </ul>
            <button id="contact-btn"
            onClick={() => window.open("/contact","_blank")}>Contact Us</button>
                </div>
            </div>
            <div className='software-training'>
                <div className='services-details'>
                    <h2>Software Trainings</h2>
            <p>Professional training programs designed to upskill your team with the latest technologies and industry best practices.</p>
            <ul type='none'>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Corporate Training</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Techincal Workshops</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Certification Courses</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Hands-on Projects</li><br />
            </ul>
            <button id="contact-btn"
            onClick={() => window.open("/contact","_blank")}>Contact Us</button>
                </div>
                <div className='services-images'>
                    <img src={software} alt="" width={600}/>
                </div>

            </div>
            <div className='analytics'>
                <div className='services-images'>
                    <img src={analytics} alt="" width={600} />
                </div>
                <div className='services-details'>
                  <h2>Analytics</h2>
            <p>Data-driven insights and analytics solutions that help you make informed business decisions and drive growth.</p>
            <ul type='none'>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Business Intelligence</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Data Visualization</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Predictive Analytics</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Custom Dashboards</li><br />
            </ul>
            <button id="contact-btn"
            onClick={() => window.open("/contact","_blank")}>Contact Us</button> 
                </div>
                
            </div>
            <div className='staffing-services'>
                <div className='services-details'>
                    <h2>Staffing Services</h2>
            <p>End-to-end IT staffing solutions to help you build high-performing teams with the right talent for your projects.</p>
            <ul type='none'>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Contract Staffing</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Permanent Hiring</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Staff Augmentation</li><br/>
            <li><img src="https://cdn-icons-png.flaticon.com/128/16750/16750043.png" alt="" width={20}/>Remote Teams</li><br />
            </ul>
            <button id="contact-btn"
            onClick={() => window.open("/contact","_blank")}>Contact Us</button>
                </div>
                <div className='services-images'>
                    <img src={staff} alt="" width={600}/>
                </div>
            </div>
        </section>
    </>
  )
}
export default Services