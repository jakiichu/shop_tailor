import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider from '../../../../assets/slider.png'
const CarouselBox = (): JSX.Element => {
    return (
        <>
            <img src={slider} width={`100%`}/>
        </>
    );
};

export {CarouselBox};