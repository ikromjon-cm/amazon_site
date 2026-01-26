import React from 'react';
import './Card.css';

const Banner = ({ data }) => {
  return (
    <div className="carts-container">
      <div className="carts-wrapper">
        {data.map((item, index) => (
          <div key={index} className="carts-box">
            <h2 className="carts-title">{item.title}</h2>
            
            <div className="carts-grid">
              {item.card.map((product, i) => (
                <div key={i} className="carts-item">
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