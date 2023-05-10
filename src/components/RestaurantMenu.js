import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ResMenuShimmer from "./ResMenuShimmer";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const [menuCardList, setMenuCardList] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getResMenu();
  }, []);

  async function getResMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info?.name);
    console.log(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards[0]?.card?.info?.name
    );

    setResMenu(json?.data?.cards);
    setMenuCardList(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }
  const info = resMenu[0]?.card?.card?.info;

  return resMenu.length == 0 ? (
    <>
      <ResMenuShimmer />
    </>
  ) : (
    <div className="resMenu-container">
      <div className="resMenu-header">
        <div className="resMenu-heder-1">
          <div className="resMenu-header-title">
            <h3>{info?.name}</h3>
            <h5 style={{ color: "#7e808c" }}>{info?.cuisines.join(", ")}</h5>
            <h5 style={{ color: "#7e808c" }}>
              {info?.areaName} {info?.sla?.lastMileTravelString}
            </h5>
          </div>
          <div className="resMenu-header-rating">
            <h4>
              <i
                className="fa-solid fa-star"
                style={{ marginRight: "5px" }}
              ></i>
              {info?.avgRating}
            </h4>
            <h6 style={{ color: "#7e808c" }}>{info?.totalRatingsString}</h6>
          </div>
        </div>
      </div>
      <h3 className="recommended">Recommended({menuCardList.length})</h3>
      <div>
        {menuCardList.map((menu) => (
          <MenuCard key={menu?.card?.info?.id} menuData={menu} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
