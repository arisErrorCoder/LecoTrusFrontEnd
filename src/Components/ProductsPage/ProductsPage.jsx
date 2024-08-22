import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus, faSearchPlus, faShareAlt, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './ProductsPage.css';
import sizeChartInches from '../../assets/Product/size chart.png'; 
import sizeChartCm from '../../assets/Product/size chart.png';
import { StoreContext } from '../Store/StoreContext';

const ProductsPage = () => {
  const { id } = useParams();
  const { products, addToCart, url } = useContext(StoreContext);

  // Convert id to string if it's not already
  const productId = id.toString();

  // Find the product by _id
  const product = products.find(p => p._id === productId);

  if (!product) return <p>Product not found</p>;

  const { name, description, price, images = [], color, category } = product;

  const [mainImage, setMainImage] = useState(`${url}/images/${images[0]}`);
  const [zoomed, setZoomed] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [selectedSize, setSelectedSize] = useState('');
  const [showSharePrompt, setShowSharePrompt] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [sizeUnit, setSizeUnit] = useState('inches');

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, 1, selectedSize); // Pass the product object with _id
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  const handleImageClick = (image) => {
    setMainImage(`${url}/images/${image}`);
    setZoomed(false);
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleShareClick = () => {
    setShowSharePrompt(true);
  };

  const closeSharePrompt = () => {
    setShowSharePrompt(false);
  };

  const handleSizeChartClick = () => {
    setShowSizeChart(true);
  };

  const closeSizeChart = () => {
    setShowSizeChart(false);
  };

  const handleSizeUnitChange = (unit) => {
    setSizeUnit(unit);
  };

  const currentLink = window.location.href;

  const convertCurrency = (amount) => {
    switch (currency) {
      case 'INR':
        return amount * 82; // Example conversion rate
      case 'USD':
      default:
        return amount;
    }
  };

  return (
    <div>
      <div className={`product-view-page ${showSizeChart ? 'no-header' : ''}`}>
        <div className="product-images">
          <div className="thumbnail-images">
            {images.slice(0).map((img, index) => (
              <img key={index} src={`${url}/images/${img}`} alt={`${name} ${index + 1}`} className="thumbnail-image"  onClick={() => handleImageClick(img)} />
            ))}
          </div>
          <div className={`main-image-container ${zoomed ? 'zoomed' : ''}`} onClick={toggleZoom}>
            <img src={mainImage} alt={name} className="main-image" />
            <div className="image-icons">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <FontAwesomeIcon icon={faSearchPlus} className="icon zoom" />
          </div>
        </div>
        <div className="product-details">
          <div className="product-header">
            <h1>{name}</h1>
            <FontAwesomeIcon icon={faShareAlt} className="icon share" onClick={handleShareClick} />
          </div>
          <p className="product-description">
            {description}
          </p>
          <p className="price">Price: {currency === 'USD' ? `$${price}` : `₹${price}`}</p>
          <div className="currency-converter">
            <label htmlFor="currency">Convert to:</label>
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
              <option value="USD">(USD)$</option>
              <option value="INR">(INR)</option>
            </select>
          </div>
          <div className="size-selection">
            <label>Size:</label>
            <a href="#" onClick={handleSizeChartClick} className="size-chart-link">Size Chart</a>
            <div className="sizes">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'CUSTOM SIZE'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={selectedSize === size ? 'active' : ''}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingCart} className="icon button-icon" />
            ADD TO CART
          </button>
          <button className="enquiry">
            <FontAwesomeIcon icon={faEnvelope} className="icon button-icon" />
            ENQUIRY
          </button>
        </div>
      </div>
      {showSharePrompt && (
        <div className="share-prompt">
          <div className="share-prompt-content">
            <h3>Share this product</h3>
            <input type="text" value={currentLink} readOnly />
            <div className="share-options">
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentLink)}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentLink)}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
              </a>
            </div>
            <button onClick={closeSharePrompt} className="close-button1">Close</button>
          </div>
        </div>
      )}
      {showSizeChart && (
        <div className="size-chart-prompt">
          <div className="size-chart-content">
            <h3>Size Chart</h3>
            <div className="size-unit-buttons">
              <button onClick={() => handleSizeUnitChange('inches')} className={sizeUnit === 'inches' ? 'active' : ''}>Inches</button>
              <button onClick={() => handleSizeUnitChange('cm')} className={sizeUnit === 'cm' ? 'active' : ''}>CM</button>
            </div>
            <img src={sizeUnit === 'inches' ? sizeChartInches : sizeChartCm} alt="Size Chart" />
            <button onClick={closeSizeChart} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
