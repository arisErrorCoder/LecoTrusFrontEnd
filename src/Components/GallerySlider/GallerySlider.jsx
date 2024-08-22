import React, { useState, useEffect, useRef } from 'react';
import './GallerySlider.css'; // Adjust the path based on your file structure

import img1 from '../../assets/GallerySliderImage/image1.jpg';
import img2 from '../../assets/GallerySliderImage/image2.jpg';
import img3 from '../../assets/GallerySliderImage/image3.avif';
import img4 from '../../assets/GallerySliderImage/image4.jpg';
import img5 from '../../assets/GallerySliderImage/image5.jpg';
import img6 from '../../assets/GallerySliderImage/image6.avif';
import img7 from '../../assets/GallerySliderImage/image7.avif';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideImages = [img1, img2, img3, img4, img5 , img6 ,img7];
    const imageContainerRef = useRef(null); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 1000); // Adjust interval as needed

        return () => clearInterval(interval);
    }, [slideImages.length]);

    // Scroll to current index
    useEffect(() => {
        if (imageContainerRef.current) {
            const width = imageContainerRef.current.offsetWidth;
            const fullWidth = width / 3; // As we are displaying 3 images at a time
            imageContainerRef.current.scrollTo({
                left: fullWidth * currentIndex, 
                behavior: 'smooth',
            });
        }
    }, [currentIndex, slideImages.length]);

    return (
        <div className="home-page">
            <section className="parallel-slider">
                <div className="parallel-slider-container" ref={imageContainerRef}>
                    {slideImages.map((image, index) => {
                        const isActive = index === (currentIndex + 1) % slideImages.length;
                        return (
                            <div className="parallel-slide" key={index}>
                                <img
                                    src={image}
                                    alt={`Parallel Slide ${index + 1}`}
                                    className={isActive ? 'active' : ''}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;