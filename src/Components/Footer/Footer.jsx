import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const toggleSection = (setOpen, isOpen) => {
    setOpen(!isOpen);
  };

  const handleLocationClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/g6YRmmuZaXvsVffD8?g_st=ic`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = async () => {
    if (email.trim() === '') {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatusMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        if (response.status === 0) {
          setStatusMessage('CORS issue: Unable to connect to the server.');
        } else {
          setStatusMessage('Failed to subscribe. Please try again later.');
        }
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* The Company Section */}
        <div className="footer-section">
          <div className="section-header" onClick={() => toggleSection(setIsCompanyOpen, isCompanyOpen)}>
            <h4>THE COMPANY</h4>
            <FontAwesomeIcon icon={isCompanyOpen ? faChevronUp : faChevronRight} className="toggle-icon" />
          </div>
          <ul className={`company ${isCompanyOpen ? 'open' : ''}`}>
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><Link to="/client-order-process">CLIENT ORDER PROCESS</Link></li>
            <li><Link to="/contact-us">CAREER</Link></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div className="footer-section">
          <div className="section-header" onClick={() => toggleSection(setIsHelpOpen, isHelpOpen)}>
            <h4>NEED HELP</h4>
            <FontAwesomeIcon icon={isHelpOpen ? faChevronUp : faChevronRight} className="toggle-icon" />
          </div>
          <ul className={`help-links ${isHelpOpen ? 'open' : ''}`}>
            <li><Link to="/contact-us">CONTACT US</Link></li>
            <li><Link to="/contact-us">BOOK AN APPOINTMENT</Link></li>
            <li><Link to="/contact-us">BOOK A VIDEO CALL</Link></li>
            <li><Link to="/write-to-us">WRITE TO US</Link></li>
            <li><Link to="/measurement">MEASUREMENTS</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <div className="section-header" onClick={() => toggleSection(setIsLegalOpen, isLegalOpen)}>
            <h4>LEGAL</h4>
            <FontAwesomeIcon icon={isLegalOpen ? faChevronUp : faChevronRight} className="toggle-icon" />
          </div>
          <ul className={`discover-links ${isLegalOpen ? 'open' : ''}`}>
            <li><Link to="/privacy-cookies">PRIVACY & COOKIES</Link></li>
            <li><Link to="/fees-payment">FEES & PAYMENT</Link></li>
            <li><Link to="/terms-conditions">TERM AND CONDITION</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <div className="section-header">
            <h4>NEWSLETTER</h4>
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleNewsletterSubmit} className="send-button">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>

        {/* Store Location Section */}
        <div className="footer-section">
          <div className="section-header">
            <h4>STORE LOCATION</h4>
          </div>
          <div className="dropdown-content">
            <p>Click below to view location:</p>
            <div>
            <p className="address">1st floor, LECOTRUS ®,
               Sasha Bulding, 131, E Venkatasamy Rd, near D Decor, R.S. Puram, Coimbatore, Tamil Nadu 641002</p>
            </div>
            <button onClick={handleLocationClick} className="map-button">
              View on Google Maps
            </button>
            {/* Replace with actual address */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest"></i></a>
        </div>
        <p>COPYRIGHTS 2024 BY LECOTRUS. DEVELOPED AND MAINTAINED BY YATRATECHS.</p>
      </div>
    </footer>
  );
};

export default Footer;
