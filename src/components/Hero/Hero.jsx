import React from 'react';
import './Hero.css';

const Hero = ({ bestData }) => {
  return (
    <div className="hero-container">
      {bestData.map((section, index) => (
        <div key={index} className="best-seller-section">
          <h2 className="section-title">{section.title}</h2>
          
          <div className="image-scroll-row">
            {section.images.map((imgObj, i) => (
              <div key={i} className="scroll-item">
                <img src={imgObj.url} alt="Best Seller" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;