import React from "react";

import star from "../img/star.png";
import "../css/Card2.css";
const Card2 = ({
  title,
  description,
  price,
  stats,
  location,
  openSpots,
  id,
}) => {
  return (
    <div key={id}>
      <div className="card-details">
        <div>
          {openSpots === 0 ? (
            <div className="card--badge"> SOLD OUT</div>
          ) : (
            location === "Online" && <div className="card--badge"> ONLINE</div>
          )}
          <img src={`https://source.unsplash.com/collection/${id}`} alt="" />
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>${price}</p>
        </div>

        <div className="star-rating">
          <img src={star} alt="" />
          <p>{`${stats?.rating}(${stats.reviewCount})`}</p>
        </div>
      </div>
    </div>
  );
};
export default Card2;
