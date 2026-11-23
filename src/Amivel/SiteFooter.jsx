import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import logo from "../Amivel/assets/logo.png";

function SiteFooter() {
  const navigate = useNavigate();
  return (
    <div>
        <footer className='another-footer'>
            <Link to="/"><img src={logo} alt="" width={300}
            /></Link><br />
            <div className='collections'>
            <div>
                <h3>Quick Links</h3>
                <ul type="none">
                    <li onClick={() => navigate("/")}>What we Do</li>
                    <li onClick={() => navigate("/think")}>What we Think</li>
                    <li onClick={() => navigate("/about")}>About Us</li>
                    <li onClick={() => navigate("/careers")}>Carrers</li>
                    <li onClick={() => navigate("/contact")}>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3 onClick={() => navigate("/services")}>Services</h3>
                <ul type="none">
                    <li onClick={() => navigate("/services")}>Cloud Services</li>
                    <li onClick={() => navigate("/services")}>Web Development</li>
                    <li onClick={() => navigate("/services")}>Mobile Development</li>
                    <li onClick={() => navigate("/services")}>Software Trainings</li>
                    <li onClick={() => navigate("/services")}>Analytics</li>
                    <li onClick={() => navigate("/services")}>Staffing Servises</li>
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
