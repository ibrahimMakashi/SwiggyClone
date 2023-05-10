import React from "react"
import { CAROUSEL_URL } from "./Constants"

const CarouselCard = (props) => {
    const {carouselData} = props
    const {creativeId} = carouselData?.data
    return(
        
            <img className="carouselImg" src={CAROUSEL_URL + creativeId}/>
        
    )
}

export default CarouselCard