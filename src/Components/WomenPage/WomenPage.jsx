import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList, faFilter, faChevronRight, faChevronDown, faHeart, faCartPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './WomenPage.css';
import { Link } from 'react-router-dom';
import product6 from '../../assets/Lecotrus product-06.png';
import product7 from '../../assets/Lecotrus product-07.png';
// import { useWishlist } from '../IconNavigation/WishlistContext';

const WomenPage = () => {
  const [view, setView] = useState('list');
  const [activeFilter, setActiveFilter] = useState({
    color: 'none',
    price: '0-1000000',
    category: 'none'
  });
  const [showDropdown, setShowDropdown] = useState({
    color: false,
    price: false,
    category: false
  });
  const [showFilters, setShowFilters] = useState(false);
  // const { addToWishlist } = useWishlist();

  const products = [
    { id: 6, image: product6, name: 'Sparkle Golden Indo-Western Lehanga Set', price: 18000, color: 'blue', category: 'lehanga' },
    { id: 7, image: product7, name: 'Bright Deep Sea Blue and Bright Dust Golden Ball Gown', price: 45200, color: 'gold', category: 'frock set' },
  ];

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  const toggleFilters = () => {
    setShowFilters(prevShowFilters => !prevShowFilters);
  };

  const toggleDropdown = (type) => {
    setShowDropdown(prevShowDropdown => ({
      ...prevShowDropdown,
      [type]: !prevShowDropdown[type]
    }));
  };

  const handleFilterChange = (type, value) => {
    setActiveFilter(prevActiveFilter => ({
      ...prevActiveFilter,
      [type]: value
    }));
  };

  const filteredProducts = products.filter(product => {
    const { color, price, category } = activeFilter;
    const [minPrice, maxPrice] = price.split('-').map(Number);

    return (
      (color === 'none' || product.color === color) &&
      (category === 'none' || product.category === category) &&
      product.price >= minPrice && product.price <= maxPrice
    );
  });

  return (
    <div className={`new-in-page ${showFilters ? 'show-filters' : ''}`}>
      <h1 className="new-in-title">Womens</h1>

      <div className="filters-header" onClick={toggleFilters}>
        <h2>{showFilters ? 'Hide Filters' : 'Show Filters'}</h2>
        <FontAwesomeIcon icon={faFilter} className="filters-icon" />
      </div>

      <div className={`new-in-content ${showFilters ? 'show-filters' : ''}`}>
        {/* Filters Section */}
        {showFilters && (
          <div className="filters-overlay">
            <div className="filters">
              <div className="back-button" onClick={toggleFilters}>
                <FontAwesomeIcon icon={faArrowLeft} className="back-button-icon" />
                <span>FILTERS</span>
              </div>
              <div className="filter-item">
                <div className="filter-header" onClick={() => toggleDropdown('color')}>
                  <label htmlFor="color">Color</label>
                  <FontAwesomeIcon icon={showDropdown.color ? faChevronDown : faChevronRight} className="dropdown-icon" />
                </div>
                {showDropdown.color && (
                  <div className="filter-dropdown">
                    <select id="color" value={activeFilter.color} onChange={(e) => handleFilterChange('color', e.target.value)}>
                      <option value="none">Select Color</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                      <option value="yellow">Yellow</option>
                      <option value="gold">Gold</option>
                      <option value="orange">Orange</option>
                      <option value="grey">Grey</option>
                      <option value="tan">Tan</option>
                      <option value="ivory">Ivory</option>
                      <option value="brown">Brown</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="filter-item">
                <div className="filter-header" onClick={() => toggleDropdown('price')}>
                  <label htmlFor="price">Price</label>
                  <FontAwesomeIcon icon={showDropdown.price ? faChevronDown : faChevronRight} className="dropdown-icon" />
                </div>
                {showDropdown.price && (
                  <div className="filter-dropdown">
                    <input
                      type="range"
                      id="price"
                      min="5000"
                      max="1000000"
                      step="10"
                      value={activeFilter.price.split('-')[1]}
                      onChange={(e) => handleFilterChange('price', `0-${e.target.value}`)}
                    />
                    <span>{`Rs.5000 - Rs.${activeFilter.price.split('-')[1]}`}</span>
                  </div>
                )}
              </div>
              <div className="filter-item">
                <div className="filter-header" onClick={() => toggleDropdown('category')}>
                  <label htmlFor="category">Category</label>
                  <FontAwesomeIcon icon={showDropdown.category ? faChevronDown : faChevronRight} className="dropdown-icon" />
                </div>
                {showDropdown.category && (
                  <div className="filter-dropdown">
                    <select id="category" value={activeFilter.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
                      <option value="none">Select Category</option>
                      <option value="frock">Saree</option>
                      <option value="lehanga">Lehanga</option>
                    </select>
                  </div>
                )}
              </div>
              <button className="apply-button" onClick={toggleFilters}>Apply</button>
            </div>
          </div>
        )}

        {/* Products Section */}
        <div className="products">
          <div className="view-info">
            <div className="total-products">{filteredProducts.length} LOOKS</div>
            <div className="view-icons">
              <FontAwesomeIcon
                icon={faTh}
                className={`icon ${view === 'grid' ? 'active' : ''}`}
                onClick={() => setView('grid')}
              />
              <FontAwesomeIcon
                icon={faList}
                className={`icon ${view === 'list' ? 'active' : ''}`}
                onClick={() => setView('list')}
              />
            </div>
          </div>

          <div className={`product-list ${view}`}>
            {filteredProducts.map(product => (
              <div key={product.id} className="product-item">
                <Link to={`/product/${product.id}`} className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  <div className="product-actions">
                    <FontAwesomeIcon icon={faHeart} className="action-icon" />
                    <FontAwesomeIcon icon={faCartPlus} className="action-icon" />
                  </div>
                </Link>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">Rs.{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenPage;
