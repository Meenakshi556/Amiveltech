import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='foot'>     
            <h2>&copy; 2026 Amivel </h2>
            <ul id="f1" type="none">
                <li>Disclaimer</li>
                <li>Privacy</li>
                <li>Modern Slavery Statement</li>
            </ul>
            <div className='socialmedia'>
                {/* <a  href='https://www.facebook.com/'><img src="https://www.wipro.com/content/dam/nexus/en/icon-facebook.png" alt='facebook' width={30}/></a>&nbsp; */}
                <a  href='https://www.instagram.com/amiveltechpvtltd?igsh=cDNrOHpmdWgxdXgw'><img src="https://www.wipro.com/content/dam/nexus/en/icon-Instagram.png" alt='instagram' width={30} /></a>&nbsp;
                <a  href='https://www.linkedin.com/in/amivel-tech-342508388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src="https://www.wipro.com/content/dam/nexus/en/icon-linkedin.png" alt='linkedin' width={30}/></a>&nbsp;
                {/* <a href='https://www.youtube.com/'><img src="https://www.wipro.com/content/dam/nexus/en/icon-youtube.png" alt='youtube' width={30}/></a> */}
            </div>
        </footer>
    </div>
  )
}

export default Footer