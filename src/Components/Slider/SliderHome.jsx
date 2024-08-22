import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'; // Optional for additional custom styling
import Slider1 from '../../assets/lecotrus-01 .jpg';
import Slider2 from '../../assets/lecotrus-02 .jpg';
import Slider3 from '../../assets/lecotrus-03 .jpg';
import SliderMobile1 from '../../assets/lecotrus mbl siize-01.jpg'; // Add mobile versions of the images
import SliderMobile2 from '../../assets/lecotrus mbl siize-02.jpg';
import SliderMobile3 from '../../assets/lecotrus mbl siize-03.jpg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right" style={{ fontSize: '18px' }}></i>
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left" style={{ fontSize: '18px' }}></i>
    </div>
  );
}

const SliderHome = () => {
  const [imageSources, setImageSources] = useState([Slider1, Slider2, Slider3]);

  useEffect(() => {
    const updateImageSources = () => {
      if (window.innerWidth <= 768) {
        setImageSources([SliderMobile1, SliderMobile2, SliderMobile3]);
      } else {
        setImageSources([Slider1, Slider2, Slider3]);
      }
    };

    window.addEventListener('resize', updateImageSources);

    // Initial check
    updateImageSources();

    return () => {
      window.removeEventListener('resize', updateImageSources);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imageSources.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderHome;
