import React from 'react';
import './Items.css';

const Items = ({ src, h4, price }) => {
  return (
    <div>
      <div className='col4'>
        <img src={src} alt={h4} />
        <h4>{h4}</h4>
        <p>{price}</p>
        <div className="rating">
          <input value="5" name="rating" id="star5" type="radio" />
          <label htmlFor="star5"></label>
          <input value="4" name="rating" id="star4" type="radio" />
          <label htmlFor="star4"></label>
          <input value="3" name="rating" id="star3" type="radio" />
          <label htmlFor="star3"></label>
          <input value="2" name="rating" id="star2" type="radio" />
          <label htmlFor="star2"></label>
          <input value="1" name="rating" id="star1" type="radio" />
          <label htmlFor="star1"></label>
        </div>
      </div>
    </div>
  );
};

export default Items;
