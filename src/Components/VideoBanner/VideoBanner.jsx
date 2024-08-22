import React from 'react'
import "./VideoBanner.css"

const VideoBanner = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video autoPlay muted loop controls>
          <source src="https://admin.manishmalhotra.in/videos/2%202%201.MP4" type="video/mp4"   />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoBanner