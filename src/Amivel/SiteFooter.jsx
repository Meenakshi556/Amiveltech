import React from 'react'
import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <div>
        <footer className='another-footer'>
            <Link to="/"><img src="https://amiveltech.com/images/logo.png" alt="" width={300}
            /></Link><br />
            <div className='collections'>
            <div>
                <h3>Quick Links</h3>
                <ul type="none">
                    <li onClick={() => window.open("/","_blank")}>What we Do</li>
                    <li onClick={() => window.open("/think","_blank")}>What we Think</li>
                    <li onClick={() => window.open("/about","_blank")}>About Us</li>
                    <li onClick={() => window.open("/careers","_blank")}>Carrers</li>
                    <li onClick={() => window.open("/contact","_blank")}>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3 onClick={() => window.open("/services","_blank")}>Services</h3>
                <ul type="none">
                    <li onClick={() => window.open("/services","_blank")}>Cloud Services</li>
                    <li onClick={() => window.open("/services","_blank")}>Web Development</li>
                    <li onClick={() => window.open("/services","_blank")}>Mobile Development</li>
                    <li onClick={() => window.open("/services","_blank")}>Software Trainings</li>
                    <li onClick={() => window.open("/services","_blank")}>Analytics</li>
                    <li onClick={() => window.open("/services","_blank")}>Staffing Servises</li>
                </ul>
            </div>
            <div>
                <h3>Connect with us</h3>
                <div className='footer-location'><br />
        <img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="" width={30} height={30}/><p>P No 16, Prasanthi Hills
Bachupally,Nizampet Hyderabad <br />
Telangana, India - 500090</p>
                </div>
                <div className='footer-email'><br />
          <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" alt="" width={30} height={30}/>
          <p>HR@amiveltech.com</p>
                </div>
                <div className='footer-call'><br />
                    <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt=""  width={25} height={25}/>
                    <p>+91 9989498088</p>
                </div>
            </div>
            </div>
            <p id="footer-para">&copy;2025@Amivel Tech Pvt Ltd</p>
        </footer>
    </div>
  )
}

export default SiteFooter