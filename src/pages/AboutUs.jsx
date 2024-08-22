import React from 'react';
import "./AboutUs.css";
import aboutUsImage from '../assets/Initial Process.jpeg'; // Adjust the path according to your project structure

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="process-item">
        <img src={aboutUsImage} alt="About Us" className="process-image" />
        <div className="process-text">
          <h2>About Us</h2>
          <p>
            LecotruS Started its Journey as Customize Women Wear on a very special day, recognized as International Women's Day [08-March-2019]. We began as a small boutique with an in-house space of 500-600 sqft. Our team, equipped with high skill sets in designing, cutting, tailoring, and embroidery, expanded our space to 900-1000 sqft within a few months. We then launched our customized men's wear line on International Men's Day [19-November-2020]. Today, LecotruS is recognized as a brand, customizing unisex outfits for all occasions like weddings, parties, and formal events. 
            <br />Keep supporting us.<br />
            - By LecotruS
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
