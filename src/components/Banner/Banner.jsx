import React from 'react';
import './Banner.css';

const Banner = ({ data }) => {
  return (
    <div className="banner-container">
      <div className="cards-wrapper">
        {data.map((item, index) => (
          <div key={index} className="card-box">
            <h2 className="card-title">{item.title}</h2>
            
            <div className="card-grid">
              {item.card.map((product, i) => (
                <div key={i} className="card-item">
                  <div className="image-box">
                    <img src={product.url} alt={product.subtitle} />
                  </div>
                  <p className="subtitle">{product.subtitle}</p>
                </div>
              ))}
            </div>
            
            <a href="#" className="see-more">See more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;