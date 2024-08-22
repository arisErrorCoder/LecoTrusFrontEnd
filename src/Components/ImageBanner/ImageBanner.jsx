import React, { useEffect, useState } from 'react'
import "./ImageBanner.css"
import imagebanner1 from "../../assets/Banner/LECOTRUS BANNER-04.jpg"
import imagmobile from "../../assets/Banner/lecotrus mbl siize-04.jpg"

const ImageBanner = () => {
  const [imageSrc, setImageSrc] = useState(imagebanner1);

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth <= 768) {
        setImageSrc(imagmobile);
      } else {
        setImageSrc(imagebanner1);
      }
    };

    window.addEventListener('resize', updateImageSrc);

    // Initial check
    updateImageSrc();

    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, []);

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  )
}

export default ImageBanner