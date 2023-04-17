import React from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';

export default function SimpleSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <img key={index} src={image} alt='사용자가 올린 사진' />
      ))}
    </Slider>
  );
}
