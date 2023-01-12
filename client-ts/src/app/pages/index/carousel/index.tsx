import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider from '../../../../assets/slider.png'
const CarouselBox = (): JSX.Element => {
    return (
        <>
            <img alt={'slider'} src={slider} width={`100%`}/>
        </>
    );
};

export {CarouselBox};