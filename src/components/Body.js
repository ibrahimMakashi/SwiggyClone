import React from "react";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Carousel from "./Carousel";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resList1, setResList1] = useState([]);
  const [allRestaurant, setAllRestaurent] = useState([]);

  const isOnline = useOnline()

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await api.json();
    setResList1(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
  }

  function Searchfood() {
    const filtered = allRestaurant.filter((item) =>
      item.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResList1(filtered);
  }

  if (!isOnline) {
    return <h1>look like you are offline ❓</h1>;
  }
  return resList1.length < 1 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div className="body">
     
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                Searchfood();
              }
            }}
          />
          <button className="search-btn" onClick={() => Searchfood()}>
            Search
          </button>
        </div>

        <button
          className="topRating-btn"
          onClick={() => {
            const filteredList = resList1.filter(
              (res) => res.data.avgRating > 4
            );
            setResList1(filteredList);
          }}
        >
          <i className="fa-solid fa-arrow-up-long"></i> Top Rated Restaurants
        </button>
      </div>
     
      <div className="res-container">
        {resList1.map((restaurent) => (
          <Link
            to={"/restaurant/" + restaurent.data.id}
            key={restaurent.data.id}
          >
            <RestaurantCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
