import React, { useEffect, useRef, useState } from 'react'



function Start() {
  // const navigate = useNavigate();
  const[open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e){
      if(dropdownRef.current && ! dropdownRef.current.contains(e.target)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return()=>
      document.addEventListener("mousedown",handleClickOutside);
  },[])

  return (
    <div className='start'>
        <nav className='navbar'>
            <img id="logo" onClick={() => window.open("/","_blank")}src="https://amiveltech.com/images/logo.png" alt="logo" width="300"/>
            <ul type="none" className='menu'>
                <li className="menu-item"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={()=> setOpen(false)}
                
              >What we Do &nbsp;
                {open && (
                 <div className="mega-menu">
            <div className="column"
              >
                <h4 onClick={()=> window.open('/services','_blank')}>Services</h4>
              <p onClick={() => window.open("/services","_blank")}>Cloud Services</p>
              <p onClick={() => window.open("/services","_blank")}>Web Development</p>
              <p onClick={() => window.open("/services","_blank")}>Mobile Development</p>
              <p onClick={() => window.open("/services","_blank")}>Software Training</p>
              <p onClick={() => window.open("/services","_blank")}>Analytics</p>
              <p onClick={() => window.open("/services","_blank")}>Staffing Services</p>
            </div>

            <div className="column">
              <h4 onClick={() => window.open("/industries","_blank")}>Industries</h4>
              <p onClick={() => window.open("/industries","_blank")}>Banking</p>
              <p onClick={() => window.open("/industries","_blank")}>Healthcare</p>
              <p onClick={() => window.open("/industries","_blank")}>Hi-Tech</p>
              <p onClick={() => window.open("/industries","_blank")}>Manufacturing</p>
            </div>
          </div>
                )
              }
                </li>
                <li className="menu-item" id="we2"
                onClick={() => window.open("/think","_blank")}>What we Think</li>
                <li className="menu-item" id="we3"
                onClick={() => window.open("/about","_blank")}>About Amivel</li>
                <li className="menu-item" id="we4"
                onClick={() => window.open("/careers","_blank")}>Careers</li>
                <li className="menu-item"
                onClick={() => window.open("/product","_blank")}>Product</li>
                <li className="menu-item" id="we5"
                onClick={() => window.open("/contact","_blank")}>Contact</li>
                
            </ul>
           
        </nav>
     </div>
  )
}

export default Start