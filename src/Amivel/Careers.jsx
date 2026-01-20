import React from 'react'
// import { Link } from 'react-router-dom'

const Careers = () => {
  return (
    <>
    
      <section className='careers-menu'>
          <article>
                <aside>
                    Careers
                </aside>
            </article>
            </section>
    <div className='offer'>
      <br />
        <h2>Software Testing Engineer Intern</h2>
        <span><p>AmiVel Tech Pvt Ltd </p></span>
        <span><img src="https://amiveltech.com/images/logo.png" alt=""  width={100}/></span>
        <p>YOP: 2024,2025</p>
        <p>Skills: Manual Testing,Automation Testing and Selenium</p>
        <p>Gender: Male, Female</p>
        <p>Location:📍Hyderabad</p><br />
        <button onClick={() => window.open("/applyform","_blank")}>Apply</button>
    </div>
    
    </>
  )
}

export default Careers