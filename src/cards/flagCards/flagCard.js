import React from "react";
import "./flagCard.css";

const flagCard = ({ country, meals, image, click }) => {
  return (
    <>
      <div className="flag-card">
        <div className="flag">
          <img className="flagImg" src={image} alt="flag" />
        </div>
        <div className="text">
          <div className="country">
            <h1>{country}</h1>
          </div>
          <div className="meals">
            <ol>
              {meals.map(i => (
                <li onClick={click} id={i} key={i}>{i}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default flagCard;
