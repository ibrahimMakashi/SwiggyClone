import React from "react";
import { IMG_URL } from "./Constants";
import Offer from "../assets/img/Offer.svg";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    aggregatedDiscountInfoV2,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#ffffff" }}>
      <img className="res-logo" src={IMG_URL + cloudinaryImageId} />

      <h4 className="res-name">{name}</h4>
      <h5 className="res-cuisines">{cuisines.join(", ")}</h5>
      <div className="res-about">
        <h6 className="res-rating">
          <i className="fa-sharp fa-solid fa-star"></i> {avgRating}
        </h6>
        <div>•</div>
        <h6 className="res-delTime">{slaString}</h6>
        <div>•</div>
        <h6 className="res-delTime">{costForTwoString}</h6>
      </div>

      <h4 className="res-discount">
        {aggregatedDiscountInfoV2 &&
        aggregatedDiscountInfoV2.descriptionList ? (
          aggregatedDiscountInfoV2.descriptionList[0] ? (
            <>
              <div className="discount-container">
                <img className="discount-img" src={Offer} />
                <div className="discount-title">
                  {" "}
                  {aggregatedDiscountInfoV2.descriptionList[0].meta}
                </div>
              </div>
            </>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </h4>
    </div>
  );
};

export default RestaurantCard;
