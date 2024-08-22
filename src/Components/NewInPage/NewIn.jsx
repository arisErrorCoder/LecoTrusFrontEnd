import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './NewIn.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Store/StoreContext';

const NewInPage = () => {
  const { products,  url } = useContext(StoreContext);
  const [view, setView] = useState('list');

  return (
    <div className="new-in-page">
      <h1 className="new-in-title">NEW IN</h1>

      <div className="products">
        <div className="view-info">
          <div className="total-products">{products.length} LOOKS</div>
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
          {products.map(product => (
            <div key={product._id} className={`product-item ${!product.inStock ? 'out-of-stock' : ''}`}>
              {product.inStock ? (
                <Link to={`/products/${product._id}`} className="product-image-container">
                  <img src={`${url}/images/${product.images[0]}`} alt={product.name} />
                  <div className="product-actions">
                    <FontAwesomeIcon icon={faHeart} className="action-icon" />
                    <FontAwesomeIcon icon={faCartPlus} className="action-icon" />
                  </div>
                </Link>
              ) : (
                <div className="product-image-container disabled">
                  <img src={`${url}/images/${product.images[0]}`} alt={product.name} />
                  <div className="out-of-stock-label">Out of Stock</div>
                </div>
              )}
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Rs.{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewInPage;

