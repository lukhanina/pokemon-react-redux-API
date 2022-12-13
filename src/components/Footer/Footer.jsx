import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import './style.css';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-mrg-l'>
        <p className='all-rights'>Lukhanina Hanna</p>
        <p className='all-rights'>© 2022 All Rights Reserved.</p>
      </div>
      <nav className='social footer-mrg-r'>
        <a href="https://facebook.com/100009711630475" className='social-links'><FontAwesomeIcon icon={faFacebook} className='fa-brands'/></a>
        <a href="https://linkedin.com/in/hanna-lukhanina-132b62b6" className='social-links'><FontAwesomeIcon icon={faLinkedin} className='fa-brands'/></a>
        <a href="https://instagram.com/jwannlu" className='social-links'><FontAwesomeIcon icon={faInstagram} className='fa-brands'/></a>
        <a href="mailto:lukhanina.anna@gmail.com" className='social-links'><FontAwesomeIcon icon={faGooglePlus} className='fa-brands'/></a>
      </nav>
    </footer>
  )
}
