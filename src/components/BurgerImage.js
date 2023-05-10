import React from "react";
import BurgerLoader from "./BurgerLoader";

const BurgerImage = () => {
    return(
        <div className="burger-img">
            <img className="burger" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"/>
            <BurgerLoader/>
        </div>
    )
}

export default BurgerImage;