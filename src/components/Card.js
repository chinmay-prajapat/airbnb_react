import React from "react";

import Star from "../img/star.png";
const Card = ({ country, img, rating, reviewCount, title, price }) => {
  return (
    <div className="card">
      <div>
        <img src={img} alt="" className="person-image" />
      </div>
      <div className="card--stats">
        <div>
          <img src={Star} alt="" className="card-img" />

          <span>{`${rating}.0(${reviewCount}).${country}`}</span>
        </div>

        <div>
          <p>{title}</p>
          <p>From ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
