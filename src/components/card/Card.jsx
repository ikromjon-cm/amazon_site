import React from 'react';
import './Card.css';

const Banner = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        {data.map((item, index) => (
          <div key={index} className="card-box">
            <h2 className="card-title">{item.title}</h2>
            
            <div className="card-grid">
              {item.card.map((product, i) => (
                <div key={i} className="card-item">
                  <div className="images-box">
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