import React, { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { CAROUSEL_URL } from "./Constants";
import BurgerImage from "./BurgerImage";

const Carousel = () => {
  const [carouselList, setCarouselList] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(0);

  const showLeftBtn = carouselPosition < 0;
  const showRightBtn = carouselPosition > -1480;

  const handleLeftClick = () => {
    setCarouselPosition(carouselPosition + 300);
  };
  const handleRightClick = () => {
    setCarouselPosition(carouselPosition - 300);
  };
  useEffect(() => {
    getCarousel();
  }, []);

  async function getCarousel() {
    const carousel = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await carousel.json();
    setCarouselList(json?.data?.cards[0]?.data?.data?.cards);
    console.log(json?.data?.cards[0]?.data?.data?.cards[0]?.data?.creativeId);
  }
  console.log(carouselPosition);
  return (
    <div className="carousel-conatiner">
      {carouselList.length < 1 ? (
        <>
          <BurgerImage/>
        </>
      ):  <div className="carousel-mid">
      {showLeftBtn ? (
        <button className="carousel-left" onClick={handleLeftClick}>
          <i className="fa-solid fa-arrow-left arrow"></i>
        </button>
      ) : null}
      {showRightBtn ? (
        <button className="carousel-right" onClick={handleRightClick}>
          <i className="fa-solid fa-arrow-right arrow"></i>
        </button>
      ) : null}
      <div
        className="carousel-inner"
        style={{transform: `translateX(${carouselPosition}px)`}}
      >
        {carouselList.map((carousel) => (
          <CarouselCard key={carousel.data.bannerId} carouselData={carousel}/>
        ))}
      </div>
    </div>}
     
    </div>
  );
};

export default Carousel;
