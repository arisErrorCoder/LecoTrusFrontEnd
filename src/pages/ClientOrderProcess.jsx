import React from 'react';
import "./ClientOrderProcess.css";
import image1 from '../assets/Initial Process.jpeg';
import image2 from '../assets/Initial Process.jpeg';
import image3 from '../assets/pd7ig2.jpg'; // Assuming you have a default image for other sections
import designVideo from '../assets/DesignProcess.mp4'; // Import the video

const ClientOrderProcess = () => {
  return (
    <div className="couture-process">
      <h3 className="section-title">CLIENT ORDER PROCESS</h3>
      <p className="section-subtitle">
        At Lecotrus we prioritize relationships, consideration, and creative potential with our clients to deliver the highest quality couture. Our commitment to true craftsmanship is unwavering, ensuring excellence in every product we create.
      </p>

      <div className="process-section">
        <div className="process-item">
          <div className="process-text">
            <h2>INITIAL PROCESS</h2>
            <p>
              We fix appointments that are flexible to the client, either in our store or online. Through our designers, we encourage the client to communicate any reference ideas that they feel need to be part of their design. Our designer will give you a solution to ensure that every aspect of the garment is noted.
            </p>
          </div>
          <img src={image1} alt="Consultation" className="process-image" />
        </div>

        <div className="process-item">
          <div className="process-text">
            <h2>MEASUREMENTS</h2>
            <p>
              After the initial process, our designer will take measurements. If done online, it will be guided by our designers to complete this process.
            </p>
          </div>
          <img src={image2} alt="Measurements" className="process-image" />
        </div>

        <div className="process-item">
          <div className="process-text">
            <h2>DESIGN PROCESS</h2>
            <p>
              After measurement, based on your requirements, the design process will start. Once the design piece is completed and approved by the client, the work begins. Within 5-11 weeks, the order will be finished and brought to your vision.
            </p>
          </div>
          <video controls className="process-video">
            <source src={designVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="process-item">
          <div className="process-text">
            <h2>DELIVERY</h2>
            <p>
              Once the order is completed and the final fit check is done by our client, we will pack it with utmost love & care using our luxury packaging. Our team will contact you for dispatch details via phone, WhatsApp, or email.
            </p>
          </div>
          <img src={image3} alt="Delivery" className="process-image" />
        </div>
      </div>
    </div>
  );
};

export default ClientOrderProcess;
