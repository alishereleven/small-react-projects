import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = showNavbar ? `${linksHeight}px` : '0px';
  }, [showNavbar])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo'/>
          <button
            className='nav-toggle'
            onClick={() => setShowNavbar(prevShowNavbar => !prevShowNavbar)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map(({ id, url, text }) => (
              <li key={id}><a href={url}>{text}</a></li>
            ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map(({ id, url, icon }) => (
            <li key={id}><a href={url}>{icon}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
