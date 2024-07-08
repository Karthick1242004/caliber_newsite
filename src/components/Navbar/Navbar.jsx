import React, { useEffect, useState } from 'react'
import Na from './Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [mobileView, setMobileView] = useState(false);
 
  const handleToggleNav = () => {
    if (mobileView) {
      setShowNavLinks(!showNavLinks);
    }
  };

  const checkScreenSize = () => {
    setMobileView(window.innerWidth <= 750);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={Na.nav}>
          <div className={Na.navb}>
            <h1>3D-Robo</h1>
            <button className={Na.navicon} onClick={handleToggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </button>
              <div
                 className={`${Na.navb1} ${mobileView ? 'flex-column' : ''}`}
                 style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }}
                >
                <Link className={Na.lk} to="#">Sample</Link>
                <Link to='#' smooth={true} duration={800} className={Na.lk} >Sample</Link>
                <Link to='#' smooth={true} duration={800} className={Na.lk} >Sample</Link>
              </div>
           </div>
    </div>
  )
}
