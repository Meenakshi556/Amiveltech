import React, { useEffect, useRef, useState } from 'react'


function Start() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setMobileMenu(false);
        setOpen(false);
        setMobileDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenu]);

  const handleNavigation = (url) => {
    setOpen(false);
    setMobileMenu(false);
    setMobileDropdownOpen(false);
    window.open(url, "_blank");
  };

  return (
    <div className='start'>
      <nav className='navbar'>
       
        <img 
          id="logo" 
          
          onClick={() => window.open("/", "_blank")} 
          src="https://amiveltech.com/images/logo.png" 
          alt="logo" 
          width="300"
          style={{ cursor: 'pointer' }}
        />
        
        {/* Hamburger Menu Button */}
        <div 
          className={`hamburger ${mobileMenu ? 'active' : ''}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Desktop Menu */}
        <ul type="none" className='menu'>
          <li 
            className="menu-item"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            ref={dropdownRef}
          >
            What we Do &nbsp;
            {open && (
              <div className="mega-menu">
                <div className="column">
                  <h4 onClick={() => handleNavigation('/services')}>Services</h4>
                  <p onClick={() => handleNavigation('/services')}>Cloud Services</p>
                  <p onClick={() => handleNavigation('/services')}>Web Development</p>
                  <p onClick={() => handleNavigation('/services')}>Mobile Development</p>
                  <p onClick={() => handleNavigation('/services')}>Software Training</p>
                  <p onClick={() => handleNavigation('/services')}>Analytics</p>
                  <p onClick={() => handleNavigation('/services')}>Staffing Services</p>
                </div>

                <div className="column">
                  <h4 onClick={() => handleNavigation('/industries')}>Industries</h4>
                  <p onClick={() => handleNavigation('/industries')}>Banking</p>
                  <p onClick={() => handleNavigation('/industries')}>Healthcare</p>
                  <p onClick={() => handleNavigation('/industries')}>Hi-Tech</p>
                  <p onClick={() => handleNavigation('/industries')}>Manufacturing</p>
                </div>
              </div>
            )}
          </li>
          <li className="menu-item" id="we2" onClick={() => handleNavigation("/think")}>What we Think</li>
          <li className="menu-item" id="we3" onClick={() => handleNavigation("/about")}>About Amivel</li>
          <li className="menu-item" id="we4" onClick={() => handleNavigation("/careers")}>Careers</li>
          <li className="menu-item" onClick={() => handleNavigation("/product")}>Product</li>
          <li className="menu-item" id="we5" onClick={() => handleNavigation("/contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Overlay */}
        {mobileMenu && (
          <div className="mobile-menu-overlay" onClick={() => setMobileMenu(false)}>
            <ul className="mobile-menu show">
              {/* What we Do with dropdown for mobile */}
              <li className="mobile-dropdown-item">
                <div 
                  className="mobile-dropdown-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  }}
                >
                  What we Do 
                  <span className={`mobile-arrow ${mobileDropdownOpen ? 'open' : ''}`}>▼</span>
                </div>
                {mobileDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    <li onClick={() => handleNavigation('/services')}>Services</li>
                    <li onClick={() => handleNavigation('/services')}>Cloud Services</li>
                    <li onClick={() => handleNavigation('/services')}>Web Development</li>
                    <li onClick={() => handleNavigation('/services')}>Mobile Development</li>
                    <li onClick={() => handleNavigation('/services')}>Software Training</li>
                    <li onClick={() => handleNavigation('/services')}>Analytics</li>
                    <li onClick={() => handleNavigation('/services')}>Staffing Services</li>
                    <li onClick={() => handleNavigation('/industries')}>Industries</li>
                    <li onClick={() => handleNavigation('/industries')}>Banking</li>
                    <li onClick={() => handleNavigation('/industries')}>Healthcare</li>
                    <li onClick={() => handleNavigation('/industries')}>Hi-Tech</li>
                    <li onClick={() => handleNavigation('/industries')}>Manufacturing</li>
                  </ul>
                )}
              </li>
              <li onClick={() => handleNavigation("/think")}>What we Think</li>
              <li onClick={() => handleNavigation("/about")}>About Amivel</li>
              <li onClick={() => handleNavigation("/careers")}>Careers</li>
              <li onClick={() => handleNavigation("/product")}>Product</li>
              <li onClick={() => handleNavigation("/contact")}>Contact</li>
            </ul>
          </div>
        )}
      </nav>
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .start {
          position: relative;
          padding-top: 80px;
          min-height: 100vh;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
        }

        #logo {
          cursor: pointer;
          transition: opacity 0.3s;
        }

        #logo:hover {
          opacity: 0.8;
        }

        .menu {
          display: flex;
          list-style: none;
          font-size: 20px;
          margin: 0;
          padding: 0;
          gap: 30px;
        }

        .menu-item {
          position: relative;
          cursor: pointer;
          padding: 10px 15px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .menu-item:hover {
          color: #007bff;
        }

        /* Mega Menu */
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          padding: 20px;
          min-width: 400px;
          display: flex;
          gap: 30px;
          border-radius: 8px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mega-menu .column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mega-menu h4 {
          margin: 0 0 10px 0;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          padding: 5px 0;
        }

        .mega-menu h4:hover {
          color: #007bff;
        }

        .mega-menu p {
          margin: 0;
          color: #666;
          cursor: pointer;
          padding: 5px 0;
          transition: color 0.3s;
        }

        .mega-menu p:hover {
          color: #007bff;
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          padding: 5px;
          z-index: 1001;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #333;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          animation: fadeIn 0.3s ease;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100%;
          background: white;
          list-style: none;
          margin: 0;
          padding: 80px 20px 20px;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease;
          overflow-y: auto;
          z-index: 1000;
        }

        .mobile-menu.show {
          right: 0;
        }

        .mobile-menu li {
          padding: 15px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 18px;
        }

        .mobile-menu li:hover {
          color: #007bff;
          background: #f8f9fa;
        }

        /* Mobile Dropdown for "What we Do" */
        .mobile-dropdown-item {
          border-bottom: 1px solid #eee;
        }

        .mobile-dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          cursor: pointer;
          font-weight: 500;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .mobile-dropdown-header:hover {
          color: #007bff;
          background: #f8f9fa;
          padding-left: 10px;
        }

        .mobile-arrow {
          transition: transform 0.3s ease;
          font-size: 12px;
        }

        .mobile-arrow.open {
          transform: rotate(180deg);
        }

        .mobile-dropdown-menu {
          list-style: none;
          margin: 10px 0 10px 15px;
          padding: 10px 0;
          border-left: 2px solid #007bff;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-dropdown-menu li {
          padding: 10px 0;
          font-size: 16px;
          color: #666;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-dropdown-menu li:last-child {
          border-bottom: none;
        }

        .mobile-dropdown-menu li:hover {
          color: #007bff;
          padding-left: 10px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .menu {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .navbar {
            padding: 15px 20px;
          }

          #logo {
            width: 150px;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-overlay {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Start