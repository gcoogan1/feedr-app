import React, { useState } from "react";
import Time from "../../assets/icons/Time Icon.svg";
import User from "../../assets/icons/User Icon.svg";
import Cart from "../../assets/icons/Cart Icon.svg";
import LinkIcon from "../../assets/icons/Link Icon.svg";
import LinkIconTwo from "../../assets/icons/LinkIconTwo.svg";
import "./recipeCard.css";

const RecipeCard = ({ title, source, ing, serving, time, url, image }) => {
  
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="recipe-card">
        <div
          className="meal-pic"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className="meal-content">
          <div className="top-content">
            <h4 className="author">{source.toUpperCase()}</h4>
            <h2 className="meal-name">{title}</h2>
          </div>
          <div className="bottom-content">
            <ul>
              <li>
                <img src={Time} alt="time" />
                <span>{time} Mins</span>
              </li>
              <li>
                <img src={Cart} alt="cart" />
                <span>{ing} Ingredients</span>
              </li>
              <li>
                <img src={User} alt="user" />
                <span>Serves {serving}</span>
              </li>
            </ul>
            <div
              className="url"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <p>
                View Recipe{" "}
                <span>
                  &nbsp;
                  {isShown === false ? (
                    <img className="link-icon" src={LinkIcon} alt="link" />
                  ) : (
                    <img className="link-icon" src={LinkIconTwo} alt="link" />
                  )}
                </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
