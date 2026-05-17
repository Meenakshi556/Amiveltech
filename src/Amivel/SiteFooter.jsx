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
                <ul className="footer-details"type='none'>
                    <li>
                        <p>Plot No. 16
Prasanthi Hills
Near Bachupally Main Road,
Bachupally,
Hyderabad – 500090
Telangana,
India</p><p>Mytri Square,
91springboard,
Second Floor
 F948+W7, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500084</p></li>
                    <li>
          <p>HR@amiveltech.com</p></li>
                    <li>
                    <p>+91 9989498088</p></li>
                </ul>
            </div>
            </div>
            <p id="footer-para">&copy;2026@Amivel Tech Pvt Ltd</p>
        </footer>
    </div>
  )
}

export default SiteFooter