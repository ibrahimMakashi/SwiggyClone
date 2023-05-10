import React from "react";
import { IMG_URL } from "./Constants";

const MenuCard = (props) => {
  const { menuData } = props;
  const { name, price, description, imageId } = menuData?.card?.info;
  console.log("menu")
  return (
    <div className="menuCard-container">
      <div className="menuCard-title">
        <h4>{name}</h4>
        <h5><i className="fa-solid fa-indian-rupee-sign"></i> {price/100}</h5>
        <h5 className="menuCard-description">{description}</h5>
      </div>
      <img className="menuCard-img" src={IMG_URL+imageId}/>
    </div>
  );
};

export default MenuCard;
