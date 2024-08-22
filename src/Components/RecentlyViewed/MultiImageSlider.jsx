import React, { useState } from 'react';
import './MultiImageSlider.css'; // Import the CSS file

// Import images directly
import image1 from '../../assets/pd1ig1.jpg';
import image2 from '../../assets/pd2.jpg';
import image3 from '../../assets/pd3ig3.jpg';
import image4 from '../../assets/pd4ig3.png';
import image5 from '../../assets/pd5ig1.jpg';
import image6 from '../../assets/pd6ig3.jpg';
import image7 from '../../assets/pd7ig3.jpg';

const MultiImageSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const imagesToShow = 5; // Number of images to display per slide
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - imagesToShow : prevIndex - imagesToShow
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + imagesToShow) % images.length
    );
  };

  const visibleImages = [];
  for (let i = 0; i < imagesToShow; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
  }

  return (
    <div className="slider-container1">
      <h3>RECENTLY VIEWED</h3>
      <button className="arrow-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="slider1">
        <div className="image-container1">
          {visibleImages.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
      <button className="arrow-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default MultiImageSlider;
