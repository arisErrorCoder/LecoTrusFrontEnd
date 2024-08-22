import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './DropdownSection.css';

const DropdownSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="dropdown-section-wrapper">
      <div className="dropdown-content-wrapper">
        <div className="dropdown" onClick={() => toggleDropdown('details')}>
          <div className="dropdown-heading-item">
            <span>Details</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="dropdown" onClick={() => toggleDropdown('careInstructions')}>
          <div className="dropdown-heading-item">
            <span>Care Instructions</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="dropdown" onClick={() => toggleDropdown('fit')}>
          <div className="dropdown-heading-item">
            <span>Fit</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="dropdown" onClick={() => toggleDropdown('legal')}>
          <div className="dropdown-heading-item">
            <span>Legal</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
      <div className="dropdown-details">
        {openDropdown === 'details' && (
          <div className="dropdown-content">
            <p>Kindly note, product tones may vary due to lighting.</p>
            <p>For queries or customisations, please mail us at: orders@lecotrus.in</p>
          </div>
        )}
        {openDropdown === 'careInstructions' && (
          <div className="dropdown-content">
            <p>Dry clean only.</p>
          </div>
        )}
        {openDropdown === 'fit' && (
          <div className="dropdown-content">
            <p>Tailored</p>
          </div>
        )}
        {openDropdown === 'legal' && (
          <div className="dropdown-content">
            <p>Name of Commodity: Kurta Sets</p>
            <p>Country of Origin: India</p>
            <p>Manufacturer Name: LECOTRUS</p>
            <p>Manufacturer Address: Lecotrus, Bridal Store, 1st Floor, Sasha building , E.Venkatasamy Road, RS Puram, Coimbatore, Tamilnadu-641002 </p>
            <p>Net Qty: 1 N</p>
            <p>Package Contents: Kurta Sets</p>
            <p>Customer care: For any feedback, feel free to reach out to us lecotrus2019@gmail.com You can also contact to us at 9047474454 </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSection;
